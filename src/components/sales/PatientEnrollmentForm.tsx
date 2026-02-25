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
import { UserPlus, Save, Calendar, Phone, Mail, MapPin } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface PatientEnrollmentFormProps {
  onSubmit?: (data: any) => void;
}

const mockTechnicians = [
  { id: "TECH001", name: "Ravi Kumar" },
  { id: "TECH002", name: "Priya Sharma" },
  { id: "TECH003", name: "Arun Patel" },
  { id: "TECH004", name: "Deepa Nair" },
];

export function PatientEnrollmentForm({ onSubmit }: PatientEnrollmentFormProps) {
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    referringDoctor: "",
    hospital: "",
    testType: "24hour",
    preferredDate: "",
    preferredTime: "",
    technician: "",
    specialInstructions: "",
    consent: false,
  });
  const [location, setLocation] = useState<any>(null);

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      ...formData,
      location,
      enrollmentDate: new Date().toISOString(),
    };
    onSubmit?.(data);
    console.log("Patient enrolled:", data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-card rounded-2xl border border-border p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-gradient-hero">
            <UserPlus className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Patient Home Enrollment</h3>
            <p className="text-sm text-muted-foreground">Doorstep Holter test booking</p>
          </div>
        </div>

        <div className="grid gap-6">
          {/* Personal Details */}
          <div className="space-y-4">
            <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">
              Patient Information
            </h4>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="patientName">Full Name *</Label>
                <Input
                  id="patientName"
                  value={formData.patientName}
                  onChange={(e) => updateField("patientName", e.target.value)}
                  placeholder="Enter patient's full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age *</Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => updateField("age", e.target.value)}
                  placeholder="Age"
                  required
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Gender *</Label>
                <Select value={formData.gender} onValueChange={(v) => updateField("gender", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="+91 94473 55775"
                    className="pl-9"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="email@example.com"
                    className="pl-9"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address *</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => updateField("address", e.target.value)}
                placeholder="Enter complete address for home visit"
                rows={2}
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => updateField("city", e.target.value)}
                  placeholder="City"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pincode">Pincode *</Label>
                <Input
                  id="pincode"
                  value={formData.pincode}
                  onChange={(e) => updateField("pincode", e.target.value)}
                  placeholder="600001"
                  required
                />
              </div>
            </div>
          </div>

          {/* Referral Info */}
          <div className="space-y-4">
            <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">
              Referral Information
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="referringDoctor">Referring Doctor</Label>
                <Input
                  id="referringDoctor"
                  value={formData.referringDoctor}
                  onChange={(e) => updateField("referringDoctor", e.target.value)}
                  placeholder="Dr. Name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hospital">Hospital/Clinic</Label>
                <Input
                  id="hospital"
                  value={formData.hospital}
                  onChange={(e) => updateField("hospital", e.target.value)}
                  placeholder="Hospital name"
                />
              </div>
            </div>
          </div>

          {/* Test & Scheduling */}
          <div className="space-y-4">
            <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">
              Test & Scheduling
            </h4>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Test Type *</Label>
                <Select value={formData.testType} onValueChange={(v) => updateField("testType", v)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="24hour">24-Hour Holter</SelectItem>
                    <SelectItem value="48hour">48-Hour Holter</SelectItem>
                    <SelectItem value="72hour">72-Hour Holter</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredDate">Preferred Date *</Label>
                <Input
                  id="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => updateField("preferredDate", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredTime">Preferred Time</Label>
                <Select value={formData.preferredTime} onValueChange={(v) => updateField("preferredTime", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (8 AM - 12 PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                    <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Assign Technician *</Label>
              <Select value={formData.technician} onValueChange={(v) => updateField("technician", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select technician" />
                </SelectTrigger>
                <SelectContent>
                  {mockTechnicians.map((tech) => (
                    <SelectItem key={tech.id} value={tech.id}>
                      {tech.name} ({tech.id})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialInstructions">Special Instructions</Label>
              <Textarea
                id="specialInstructions"
                value={formData.specialInstructions}
                onChange={(e) => updateField("specialInstructions", e.target.value)}
                placeholder="Any special instructions or requirements..."
                rows={2}
              />
            </div>
          </div>

          {/* Consent */}
          <div className="flex items-start space-x-3 p-4 rounded-xl bg-muted/50">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => updateField("consent", checked)}
            />
            <div className="space-y-1">
              <Label htmlFor="consent" className="font-medium cursor-pointer">
                Patient Consent Obtained *
              </Label>
              <p className="text-sm text-muted-foreground">
                I confirm that the patient has been informed about the Holter test procedure
                and has given consent for the home visit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Location */}
      <LocationTracker onLocationUpdate={setLocation} showMap={true} />

      {/* Submit */}
      <div className="flex justify-end gap-3">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit" variant="hero" size="lg" disabled={!formData.consent}>
          <Save className="w-5 h-5 mr-2" />
          Enroll Patient
        </Button>
      </div>
    </form>
  );
}
