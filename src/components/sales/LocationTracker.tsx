import { useState, useEffect } from "react";
import { MapPin, RefreshCw, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LocationData {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: Date;
  address?: string;
}

interface LocationTrackerProps {
  onLocationUpdate?: (location: LocationData) => void;
  autoFetch?: boolean;
  showMap?: boolean;
}

export function LocationTracker({ 
  onLocationUpdate, 
  autoFetch = true,
  showMap = true 
}: LocationTrackerProps) {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLocation = async () => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
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
        };

        // Mock address for demo
        locationData.address = "123 Main Street, Chennai, Tamil Nadu 600001";

        setLocation(locationData);
        onLocationUpdate?.(locationData);
        setLoading(false);
      },
      (err) => {
        setError(err.message || "Failed to get location");
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  useEffect(() => {
    if (autoFetch) {
      fetchLocation();
    }
  }, [autoFetch]);

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-hero">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">Live Location</h3>
            <p className="text-xs text-muted-foreground">Auto-tracked GPS</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={fetchLocation}
          disabled={loading}
        >
          <RefreshCw className={cn("w-4 h-4 mr-2", loading && "animate-spin")} />
          Refresh
        </Button>
      </div>

      <div className="p-4">
        {error ? (
          <div className="flex items-center gap-3 p-4 rounded-xl bg-destructive/10 text-destructive">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <div>
              <p className="font-medium">Location Error</p>
              <p className="text-sm opacity-80">{error}</p>
            </div>
          </div>
        ) : location ? (
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 text-green-700 border border-green-200">
              <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-medium">Location Captured</p>
                <p className="text-sm">{location.address}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-green-600">
                  <span>Lat: {location.latitude.toFixed(6)}</span>
                  <span>Long: {location.longitude.toFixed(6)}</span>
                  <span>Accuracy: ±{Math.round(location.accuracy)}m</span>
                </div>
                <p className="text-xs text-green-600">
                  Captured at: {location.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>

            {showMap && (
              <div className="relative h-48 rounded-xl overflow-hidden bg-muted">
                <iframe
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${location.longitude - 0.01},${location.latitude - 0.01},${location.longitude + 0.01},${location.latitude + 0.01}&layer=mapnik&marker=${location.latitude},${location.longitude}`}
                  className="w-full h-full border-0"
                  title="Location Map"
                />
                <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-foreground/80 text-white text-xs">
                  Cannot be edited manually
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center h-32 text-muted-foreground">
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>Fetching location...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
