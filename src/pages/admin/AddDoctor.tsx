import { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Stethoscope, Phone, Mail, MapPin, Building2, Plus, Award } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SPECIALIZATIONS = [
  "Cardiologist", "General Physician", "Internist", "Pulmonologist",
  "Neurologist", "Pediatrician", "Geriatrician", "Other"
];

const HOSPITALS = [
  "Apollo Hospital", "MIOT International", "Fortis Malar", 
  "Manipal Hospital", "KIMS Hospital", "Independent Practice"
];

export default function AddDoctor() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    qualification: "",
    hospital: "",
    clinicAddress: "",
    phone: "",
    email: "",
    experience: "",
    notes: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.specialization) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      toast.success("Doctor added successfully!");
      setLoading(false);
      navigate("/admin/doctors");
    }, 1000);
  };

  return (
    <AdminLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link to="/admin/doctors">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Add Doctor</h1>
            <p className="text-muted-foreground">Register a new referring doctor</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Doctor Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-primary" />
                Doctor Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="e.g., Dr. Ramesh Nair"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Specialization *</Label>
                  <Select value={formData.specialization} onValueChange={(v) => handleChange("specialization", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      {SPECIALIZATIONS.map((spec) => (
                        <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="qualification">Qualification</Label>
                  <Input
                    id="qualification"
                    placeholder="e.g., MD, DM Cardiology"
                    value={formData.qualification}
                    onChange={(e) => handleChange("qualification", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Associated Hospital</Label>
                  <Select value={formData.hospital} onValueChange={(v) => handleChange("hospital", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select hospital" />
                    </SelectTrigger>
                    <SelectContent>
                      {HOSPITALS.map((hospital) => (
                        <SelectItem key={hospital} value={hospital}>{hospital}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input
                    id="experience"
                    type="number"
                    placeholder="e.g., 15"
                    value={formData.experience}
                    onChange={(e) => handleChange("experience", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                Contact Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="clinicAddress">Clinic Address</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Textarea
                    id="clinicAddress"
                    placeholder="Enter clinic address"
                    className="pl-10 min-h-[80px]"
                    value={formData.clinicAddress}
                    onChange={(e) => handleChange("clinicAddress", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 94473 55775"
                      className="pl-10"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="doctor@email.com"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notes */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Any additional information about the doctor..."
                value={formData.notes}
                onChange={(e) => handleChange("notes", e.target.value)}
                rows={3}
              />
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex justify-end gap-3">
            <Link to="/admin/doctors">
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button type="submit" variant="hero" disabled={loading}>
              <Plus className="w-4 h-4 mr-2" />
              {loading ? "Adding..." : "Add Doctor"}
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
