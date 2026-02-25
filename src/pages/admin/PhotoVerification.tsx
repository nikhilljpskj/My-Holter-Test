import { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, XCircle, AlertTriangle, Clock, MapPin, User, Calendar, Eye, ZoomIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Mock photo verification data
const mockPhotos = [
  {
    id: 1,
    employeeId: "EMP001",
    employeeName: "Arun Kumar",
    visitId: "V001",
    client: "Apollo Hospital",
    timestamp: "2024-01-15 10:32:15",
    location: "Chennai Central",
    coords: { lat: 13.0827, lng: 80.2707 },
    status: "pending",
    photos: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
  },
  {
    id: 2,
    employeeId: "EMP002",
    employeeName: "Priya Sharma",
    visitId: "V002",
    client: "Dr. Ramesh Nair",
    timestamp: "2024-01-15 11:15:42",
    location: "Velachery",
    coords: { lat: 12.9815, lng: 80.2180 },
    status: "approved",
    photos: [
      "/placeholder.svg",
      "/placeholder.svg",
    ],
  },
  {
    id: 3,
    employeeId: "EMP003",
    employeeName: "Vijay Patel",
    visitId: "V003",
    client: "Mrs. Lakshmi",
    timestamp: "2024-01-15 09:45:30",
    location: "Anna Nagar",
    coords: { lat: 13.0850, lng: 80.2101 },
    status: "rejected",
    rejectionReason: "Location mismatch",
    photos: [
      "/placeholder.svg",
    ],
  },
];

export default function PhotoVerification() {
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null);
  const [viewerOpen, setViewerOpen] = useState(false);

  const pendingCount = mockPhotos.filter(p => p.status === "pending").length;

  const handleApprove = (id: number) => {
    console.log("Approving photo set:", id);
  };

  const handleReject = (id: number) => {
    console.log("Rejecting photo set:", id);
  };

  const PhotoCard = ({ photo }: { photo: any }) => (
    <div className="bg-card rounded-2xl border border-border overflow-hidden">
      <div className="p-4 border-b border-border">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
              {photo.employeeName.split(" ").map((n: string) => n[0]).join("")}
            </div>
            <div>
              <p className="font-medium">{photo.employeeName}</p>
              <p className="text-sm text-muted-foreground">{photo.employeeId}</p>
            </div>
          </div>
          <Badge
            variant={
              photo.status === "approved" ? "default" :
              photo.status === "rejected" ? "destructive" : "secondary"
            }
            className={photo.status === "approved" ? "bg-green-100 text-green-700" : ""}
          >
            {photo.status === "approved" && <CheckCircle className="w-3 h-3 mr-1" />}
            {photo.status === "rejected" && <XCircle className="w-3 h-3 mr-1" />}
            {photo.status === "pending" && <Clock className="w-3 h-3 mr-1" />}
            {photo.status}
          </Badge>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Visit info */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-muted-foreground" />
            <span>{photo.client}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span>{photo.timestamp.split(" ")[0]}</span>
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{photo.location}</span>
          </div>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-3 gap-2">
          {photo.photos.map((src: string, i: number) => (
            <button
              key={i}
              className="relative aspect-square rounded-lg overflow-hidden bg-muted group"
              onClick={() => {
                setSelectedPhoto({ ...photo, currentIndex: i });
                setViewerOpen(true);
              }}
            >
              <img src={src} alt={`Visit photo ${i + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
          {Array.from({ length: 3 - photo.photos.length }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square rounded-lg border-2 border-dashed border-border" />
          ))}
        </div>

        {photo.status === "rejected" && photo.rejectionReason && (
          <div className="flex items-start gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>Rejected: {photo.rejectionReason}</span>
          </div>
        )}

        {/* Actions */}
        {photo.status === "pending" && (
          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              className="flex-1 text-destructive border-destructive/30 hover:bg-destructive/10"
              onClick={() => handleReject(photo.id)}
            >
              <XCircle className="w-4 h-4 mr-2" />
              Reject
            </Button>
            <Button
              variant="default"
              className="flex-1 bg-green-600 hover:bg-green-700"
              onClick={() => handleApprove(photo.id)}
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Approve
            </Button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Photo Verification</h1>
            <p className="text-muted-foreground">Review and verify visit photos</p>
          </div>
          {pendingCount > 0 && (
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              {pendingCount} pending review
            </Badge>
          )}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList>
            <TabsTrigger value="pending" className="gap-2">
              Pending
              {pendingCount > 0 && (
                <Badge variant="destructive" className="h-5 min-w-5">
                  {pendingCount}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockPhotos.filter(p => p.status === "pending").map(photo => (
                <PhotoCard key={photo.id} photo={photo} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="approved" className="space-y-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockPhotos.filter(p => p.status === "approved").map(photo => (
                <PhotoCard key={photo.id} photo={photo} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rejected" className="space-y-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockPhotos.filter(p => p.status === "rejected").map(photo => (
                <PhotoCard key={photo.id} photo={photo} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all" className="space-y-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockPhotos.map(photo => (
                <PhotoCard key={photo.id} photo={photo} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Photo Viewer Dialog */}
      <Dialog open={viewerOpen} onOpenChange={setViewerOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Photo Details</DialogTitle>
          </DialogHeader>
          {selectedPhoto && (
            <div className="space-y-4">
              <img
                src={selectedPhoto.photos[selectedPhoto.currentIndex]}
                alt="Visit photo"
                className="w-full rounded-lg"
              />
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Employee</p>
                  <p className="font-medium">{selectedPhoto.employeeName}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Timestamp</p>
                  <p className="font-medium">{selectedPhoto.timestamp}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Location</p>
                  <p className="font-medium">{selectedPhoto.location}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Coordinates</p>
                  <p className="font-medium">
                    {selectedPhoto.coords.lat.toFixed(4)}, {selectedPhoto.coords.lng.toFixed(4)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}
