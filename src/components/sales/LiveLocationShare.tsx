import { useState, useEffect, useCallback } from "react";
import { MapPin, Send, RefreshCw, CheckCircle, Radio, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface LocationData {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: Date;
  address?: string;
}

interface LocationUpdate {
  id: string;
  location: LocationData;
  status: string;
  activity: string;
  notes: string;
  timestamp: Date;
}

const ACTIVITY_OPTIONS = [
  { value: "traveling", label: "Traveling to Location" },
  { value: "at_hospital", label: "At Hospital" },
  { value: "at_clinic", label: "At Clinic" },
  { value: "home_visit", label: "Home Visit" },
  { value: "meeting", label: "In Meeting" },
  { value: "break", label: "On Break" },
  { value: "completed", label: "Visit Completed" },
];

const STATUS_OPTIONS = [
  { value: "available", label: "Available", color: "bg-green-500" },
  { value: "busy", label: "Busy", color: "bg-amber-500" },
  { value: "in_transit", label: "In Transit", color: "bg-blue-500" },
  { value: "on_break", label: "On Break", color: "bg-gray-500" },
];

export function LiveLocationShare() {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(false);
  const [sharing, setSharing] = useState(false);
  const [isLiveTracking, setIsLiveTracking] = useState(false);
  const [watchId, setWatchId] = useState<number | null>(null);
  
  // Form fields
  const [status, setStatus] = useState("available");
  const [activity, setActivity] = useState("");
  const [notes, setNotes] = useState("");
  const [targetLocation, setTargetLocation] = useState("");
  
  // History of updates
  const [updates, setUpdates] = useState<LocationUpdate[]>([]);

  const fetchLocation = useCallback(async () => {
    setLoading(true);

    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const locationData: LocationData = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: new Date(),
          address: "Auto-detected location",
        };
        setLocation(locationData);
        setLoading(false);
      },
      (err) => {
        toast.error(err.message || "Failed to get location");
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, []);

  const startLiveTracking = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported");
      return;
    }

    const id = navigator.geolocation.watchPosition(
      (position) => {
        const locationData: LocationData = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: new Date(),
          address: "Live tracking active",
        };
        setLocation(locationData);
      },
      (err) => {
        toast.error(err.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 5000,
      }
    );

    setWatchId(id);
    setIsLiveTracking(true);
    toast.success("Live tracking started");
  };

  const stopLiveTracking = () => {
    if (watchId !== null) {
      navigator.geolocation.clearWatch(watchId);
      setWatchId(null);
    }
    setIsLiveTracking(false);
    toast.info("Live tracking stopped");
  };

  const handleShareLocation = () => {
    if (!location) {
      toast.error("Please wait for location to be captured");
      return;
    }

    if (!activity) {
      toast.error("Please select an activity");
      return;
    }

    setSharing(true);

    // Simulate sharing
    setTimeout(() => {
      const newUpdate: LocationUpdate = {
        id: Date.now().toString(),
        location: { ...location },
        status,
        activity,
        notes: notes.trim(),
        timestamp: new Date(),
      };

      setUpdates(prev => [newUpdate, ...prev]);
      setNotes("");
      setSharing(false);
      toast.success("Location shared successfully!");
    }, 800);
  };

  useEffect(() => {
    fetchLocation();
    return () => {
      if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  const currentStatus = STATUS_OPTIONS.find(s => s.value === status);

  return (
    <div className="space-y-6">
      {/* Live Location Card */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <div className="p-4 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={cn(
              "p-2 rounded-lg",
              isLiveTracking ? "bg-green-500 animate-pulse" : "bg-gradient-hero"
            )}>
              <Radio className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold flex items-center gap-2">
                Live Location Sharing
                {isLiveTracking && (
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-1.5 animate-pulse" />
                    Live
                  </Badge>
                )}
              </h3>
              <p className="text-xs text-muted-foreground">Share your location with status updates</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {isLiveTracking ? (
              <Button variant="destructive" size="sm" onClick={stopLiveTracking}>
                Stop Tracking
              </Button>
            ) : (
              <Button variant="default" size="sm" onClick={startLiveTracking}>
                <Radio className="w-4 h-4 mr-2" />
                Start Live Tracking
              </Button>
            )}
            <Button variant="outline" size="sm" onClick={fetchLocation} disabled={loading}>
              <RefreshCw className={cn("w-4 h-4", loading && "animate-spin")} />
            </Button>
          </div>
        </div>

        <div className="p-4 space-y-4">
          {/* Current Location Display */}
          {location && (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 text-green-700 border border-green-200">
              <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <div className="flex-1 space-y-1">
                <p className="font-medium">Location Captured</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-green-600">
                  <span>Lat: {location.latitude.toFixed(6)}</span>
                  <span>Long: {location.longitude.toFixed(6)}</span>
                  <span>Accuracy: ±{Math.round(location.accuracy)}m</span>
                </div>
                <p className="text-xs text-green-600">
                  Last updated: {location.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          )}

          {/* Map */}
          {location && (
            <div className="relative h-48 rounded-xl overflow-hidden bg-muted">
              <iframe
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${location.longitude - 0.01},${location.latitude - 0.01},${location.longitude + 0.01},${location.latitude + 0.01}&layer=mapnik&marker=${location.latitude},${location.longitude}`}
                className="w-full h-full border-0"
                title="Your Location"
              />
              <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-foreground/80 text-white text-xs">
                GPS Auto-tracked
              </div>
            </div>
          )}

          {/* Status & Activity Form */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Current Status</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status">
                    <div className="flex items-center gap-2">
                      <span className={cn("w-2 h-2 rounded-full", currentStatus?.color)} />
                      {currentStatus?.label}
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {STATUS_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      <div className="flex items-center gap-2">
                        <span className={cn("w-2 h-2 rounded-full", opt.color)} />
                        {opt.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Activity</Label>
              <Select value={activity} onValueChange={setActivity}>
                <SelectTrigger>
                  <SelectValue placeholder="What are you doing?" />
                </SelectTrigger>
                <SelectContent>
                  {ACTIVITY_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Target Location / Client Name</Label>
            <Input
              placeholder="e.g., Apollo Hospital, Dr. Sharma's Clinic"
              value={targetLocation}
              onChange={(e) => setTargetLocation(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Notes / Update Message</Label>
            <Textarea
              placeholder="Add any notes about your current activity..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
            />
          </div>

          <Button 
            className="w-full" 
            onClick={handleShareLocation}
            disabled={!location || !activity || sharing}
          >
            {sharing ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Sharing...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Share Location Update
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Recent Updates */}
      {updates.length > 0 && (
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="p-4 border-b border-border">
            <h3 className="font-semibold flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Recent Updates
            </h3>
          </div>
          <div className="divide-y divide-border max-h-80 overflow-y-auto">
            {updates.map((update) => {
              const statusInfo = STATUS_OPTIONS.find(s => s.value === update.status);
              const activityInfo = ACTIVITY_OPTIONS.find(a => a.value === update.activity);
              return (
                <div key={update.id} className="p-4 hover:bg-muted/50">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className={cn(
                        "w-3 h-3 rounded-full mt-1.5",
                        statusInfo?.color || "bg-muted"
                      )} />
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge variant="outline">{activityInfo?.label}</Badge>
                          <Badge variant="secondary" className="text-xs">
                            {statusInfo?.label}
                          </Badge>
                        </div>
                        {update.notes && (
                          <p className="text-sm text-muted-foreground flex items-start gap-1">
                            <MessageSquare className="w-3 h-3 mt-0.5 shrink-0" />
                            {update.notes}
                          </p>
                        )}
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {update.location.latitude.toFixed(4)}, {update.location.longitude.toFixed(4)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {update.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
