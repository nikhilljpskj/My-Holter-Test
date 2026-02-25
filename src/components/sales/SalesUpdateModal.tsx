import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SelfieCapture } from "./SelfieCapture";
import { LocationTracker } from "./LocationTracker";
import { Send, MapPin, Camera, FileText, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CapturedPhoto {
  id: string;
  dataUrl: string;
  timestamp: Date;
  location?: {
    latitude: number;
    longitude: number;
  };
}

interface LocationData {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: Date;
  address?: string;
}

interface SalesUpdateModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  employeeId?: string;
  employeeName?: string;
}

export function SalesUpdateModal({ 
  open, 
  onOpenChange,
  employeeId = "EMP001",
  employeeName = "Sales Employee"
}: SalesUpdateModalProps) {
  const { toast } = useToast();
  const [step, setStep] = useState<"location" | "selfie" | "update" | "complete">("location");
  const [location, setLocation] = useState<LocationData | null>(null);
  const [photos, setPhotos] = useState<CapturedPhoto[]>([]);
  const [formData, setFormData] = useState({
    status: "",
    activity: "",
    targetLocation: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLocationUpdate = (loc: LocationData) => {
    setLocation(loc);
  };

  const handlePhotosChange = (newPhotos: CapturedPhoto[]) => {
    setPhotos(newPhotos);
  };

  const handleSubmit = async () => {
    if (!location) {
      toast({
        title: "Location Required",
        description: "Please capture your current location first",
        variant: "destructive",
      });
      return;
    }

    if (photos.length === 0) {
      toast({
        title: "Photo Required",
        description: "Please capture at least one selfie",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Update Submitted",
      description: "Your sales update has been recorded successfully",
    });

    setStep("complete");
    setIsSubmitting(false);

    // Reset and close after showing success
    setTimeout(() => {
      onOpenChange(false);
      resetForm();
    }, 2000);
  };

  const resetForm = () => {
    setStep("location");
    setLocation(null);
    setPhotos([]);
    setFormData({
      status: "",
      activity: "",
      targetLocation: "",
      notes: "",
    });
  };

  const canProceedFromLocation = location !== null;
  const canProceedFromSelfie = photos.length > 0;
  const canSubmit = location && photos.length > 0 && formData.status && formData.activity;

  return (
    <Dialog open={open} onOpenChange={(value) => {
      if (!value) resetForm();
      onOpenChange(value);
    }}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            Sales Update - {employeeName}
          </DialogTitle>
        </DialogHeader>

        {/* Progress Steps */}
        <div className="flex items-center gap-2 py-4">
          {[
            { key: "location", icon: MapPin, label: "Location" },
            { key: "selfie", icon: Camera, label: "Selfie" },
            { key: "update", icon: FileText, label: "Update" },
          ].map((s, i) => (
            <div key={s.key} className="flex items-center gap-2 flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                step === s.key 
                  ? "bg-primary text-primary-foreground" 
                  : step === "complete" || 
                    (s.key === "location" && (step === "selfie" || step === "update")) ||
                    (s.key === "selfie" && step === "update")
                  ? "bg-green-500 text-white" 
                  : "bg-muted text-muted-foreground"
              }`}>
                {step === "complete" || 
                  (s.key === "location" && (step === "selfie" || step === "update")) ||
                  (s.key === "selfie" && step === "update")
                  ? <CheckCircle className="w-4 h-4" />
                  : i + 1
                }
              </div>
              <span className={`text-sm hidden sm:block ${step === s.key ? "font-medium" : "text-muted-foreground"}`}>
                {s.label}
              </span>
              {i < 2 && <div className="flex-1 h-px bg-border" />}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="space-y-6">
          {step === "location" && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                First, let's capture your current GPS location. This will be attached to your update.
              </p>
              <LocationTracker 
                onLocationUpdate={handleLocationUpdate} 
                autoFetch={true}
                showMap={true}
              />
              <Button 
                className="w-full" 
                disabled={!canProceedFromLocation}
                onClick={() => setStep("selfie")}
              >
                Continue to Selfie Capture
              </Button>
            </div>
          )}

          {step === "selfie" && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Now capture a selfie to verify your presence. At least one photo is required.
              </p>
              <SelfieCapture 
                maxPhotos={3}
                onPhotosChange={handlePhotosChange}
                employeeId={employeeId}
              />
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep("location")}>
                  Back
                </Button>
                <Button 
                  className="flex-1" 
                  disabled={!canProceedFromSelfie}
                  onClick={() => setStep("update")}
                >
                  Continue to Update Details
                </Button>
              </div>
            </div>
          )}

          {step === "update" && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Finally, provide your status update and activity details.
              </p>

              {/* Summary of captured data */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                  <div className="flex items-center gap-2 text-green-700">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">Location Captured</span>
                  </div>
                  <p className="text-xs text-green-600 mt-1 truncate">
                    {location?.address || `${location?.latitude.toFixed(4)}, ${location?.longitude.toFixed(4)}`}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                  <div className="flex items-center gap-2 text-green-700">
                    <Camera className="w-4 h-4" />
                    <span className="text-sm font-medium">{photos.length} Photo(s) Captured</span>
                  </div>
                  <p className="text-xs text-green-600 mt-1">
                    Last: {photos[photos.length - 1]?.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>

              {/* Update Form */}
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Status *</Label>
                    <Select 
                      value={formData.status} 
                      onValueChange={(v) => setFormData({ ...formData, status: v })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="available">Available</SelectItem>
                        <SelectItem value="busy">Busy</SelectItem>
                        <SelectItem value="in-meeting">In Meeting</SelectItem>
                        <SelectItem value="traveling">Traveling</SelectItem>
                        <SelectItem value="break">On Break</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Activity *</Label>
                    <Select 
                      value={formData.activity} 
                      onValueChange={(v) => setFormData({ ...formData, activity: v })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select activity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hospital-visit">Hospital Visit</SelectItem>
                        <SelectItem value="doctor-meeting">Doctor Meeting</SelectItem>
                        <SelectItem value="home-visit">Home Visit</SelectItem>
                        <SelectItem value="follow-up">Follow-up Call</SelectItem>
                        <SelectItem value="new-enrollment">New Enrollment</SelectItem>
                        <SelectItem value="equipment-demo">Equipment Demo</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Target Location / Client Name</Label>
                  <Input 
                    placeholder="e.g., Apollo Hospital, Dr. Kumar's Clinic"
                    value={formData.targetLocation}
                    onChange={(e) => setFormData({ ...formData, targetLocation: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Notes / Update Details</Label>
                  <Textarea 
                    placeholder="Describe your current activity, meeting outcome, or any updates..."
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep("selfie")}>
                  Back
                </Button>
                <Button 
                  className="flex-1" 
                  disabled={!canSubmit || isSubmitting}
                  onClick={handleSubmit}
                >
                  {isSubmitting ? (
                    <>Submitting...</>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit Update
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}

          {step === "complete" && (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-700">Update Submitted!</h3>
                <p className="text-sm text-muted-foreground">
                  Your sales update has been recorded with GPS location and photo verification.
                </p>
              </div>
              <div className="text-xs text-muted-foreground">
                Timestamp: {new Date().toLocaleString()}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}