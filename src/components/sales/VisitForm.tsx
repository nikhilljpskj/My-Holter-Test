import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LocationTracker } from "./LocationTracker";
import { SelfieCapture } from "./SelfieCapture";
import { ClipboardList, Save, Building2, Stethoscope, Home } from "lucide-react";

interface VisitFormProps {
  onSubmit?: (data: any) => void;
}

export function VisitForm({ onSubmit }: VisitFormProps) {
  const [visitType, setVisitType] = useState<string>("");
  const [clientName, setClientName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [followUpDate, setFollowUpDate] = useState("");
  const [location, setLocation] = useState<any>(null);
  const [photos, setPhotos] = useState<any[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      visitType,
      clientName,
      contactPerson,
      phone,
      notes,
      followUpDate,
      location,
      photos,
      timestamp: new Date().toISOString(),
    };
    onSubmit?.(data);
    console.log("Visit submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-card rounded-2xl border border-border p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-gradient-hero">
            <ClipboardList className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">New Visit Report</h3>
            <p className="text-sm text-muted-foreground">Record your client visit details</p>
          </div>
        </div>

        <div className="grid gap-6">
          {/* Visit Type */}
          <div className="space-y-2">
            <Label>Visit Type *</Label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "hospital", label: "Hospital", icon: Building2 },
                { value: "doctor", label: "Doctor", icon: Stethoscope },
                { value: "patient", label: "Home Patient", icon: Home },
              ].map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => setVisitType(type.value)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                    visitType === type.value
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <type.icon className={`w-6 h-6 ${visitType === type.value ? "text-primary" : "text-muted-foreground"}`} />
                  <span className={`text-sm font-medium ${visitType === type.value ? "text-primary" : ""}`}>
                    {type.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="clientName">Client/Institution Name *</Label>
              <Input
                id="clientName"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Enter name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactPerson">Contact Person</Label>
              <Input
                id="contactPerson"
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                placeholder="Enter contact person"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 94473 55775"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="followUp">Follow-up Date</Label>
              <Input
                id="followUp"
                type="date"
                value={followUpDate}
                onChange={(e) => setFollowUpDate(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Visit Notes *</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Enter details about the visit, discussion points, outcomes..."
              rows={4}
              required
            />
          </div>
        </div>
      </div>

      {/* Location Tracker */}
      <LocationTracker onLocationUpdate={setLocation} />

      {/* Selfie Capture */}
      <SelfieCapture onPhotosChange={setPhotos} maxPhotos={3} />

      {/* Submit Button */}
      <div className="flex justify-end gap-3">
        <Button type="button" variant="outline">
          Save as Draft
        </Button>
        <Button type="submit" variant="hero" size="lg">
          <Save className="w-5 h-5 mr-2" />
          Submit Visit Report
        </Button>
      </div>
    </form>
  );
}
