import { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Save, 
  Eye, 
  Globe, 
  Search,
  Image as ImageIcon,
  Bold,
  Italic,
  List,
  Link as LinkIcon,
  Heading1,
  Heading2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock CMS pages
const mockPages = [
  { id: "home", title: "Home Page", slug: "/", lastEdited: "2024-01-15", status: "published" },
  { id: "about", title: "About Us", slug: "/about", lastEdited: "2024-01-14", status: "published" },
  { id: "holter-test", title: "Holter Test Explained", slug: "/holter-test", lastEdited: "2024-01-13", status: "published" },
  { id: "doorstep", title: "Doorstep Holter Test", slug: "/doorstep-test", lastEdited: "2024-01-12", status: "published" },
  { id: "hospital", title: "Hospital Collaboration", slug: "/hospital-collaboration", lastEdited: "2024-01-11", status: "published" },
  { id: "contact", title: "Contact", slug: "/contact", lastEdited: "2024-01-10", status: "published" },
];

export default function CMS() {
  const [selectedPage, setSelectedPage] = useState(mockPages[0]);
  const [pageTitle, setPageTitle] = useState("Home Page");
  const [metaTitle, setMetaTitle] = useState("Holter Test at Home | Doorstep ECG Monitoring");
  const [metaDescription, setMetaDescription] = useState("Book doorstep Holter test across South India. 24-hour ECG monitoring at your home with Biocalculus device.");
  const [content, setContent] = useState(`
# Welcome to Holter Test India

We provide professional **24-hour ECG monitoring** at your doorstep across South India.

## Our Services

- Doorstep Holter Test
- Hospital Collaborations
- Doctor Partnerships

## Why Choose Us?

1. Trained technicians
2. Advanced Biocalculus device
3. Fast report turnaround
4. 100+ partner hospitals
  `);

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">CMS</h1>
            <p className="text-muted-foreground">Edit website pages and SEO settings</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button variant="hero">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Page List */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl border border-border p-4">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Pages</h3>
              </div>
              <div className="space-y-1">
                {mockPages.map((page) => (
                  <button
                    key={page.id}
                    onClick={() => setSelectedPage(page)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedPage.id === page.id
                        ? "bg-primary/10 text-primary font-medium"
                        : "hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{page.title}</span>
                      {page.status === "published" && (
                        <Badge variant="outline" className="text-[10px] h-5">
                          Live
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{page.slug}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Editor */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="content" className="space-y-4">
              <TabsList>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="seo">SEO Settings</TabsTrigger>
                <TabsTrigger value="media">Media</TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="space-y-4">
                <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="pageTitle">Page Title</Label>
                    <Input
                      id="pageTitle"
                      value={pageTitle}
                      onChange={(e) => setPageTitle(e.target.value)}
                    />
                  </div>

                  {/* Simple Toolbar */}
                  <div className="flex items-center gap-1 p-2 rounded-lg bg-muted/50 border border-border">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Bold className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Italic className="w-4 h-4" />
                    </Button>
                    <div className="w-px h-4 bg-border mx-1" />
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Heading1 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Heading2 className="w-4 h-4" />
                    </Button>
                    <div className="w-px h-4 bg-border mx-1" />
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <List className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <LinkIcon className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <ImageIcon className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Page Content (Markdown)</Label>
                    <Textarea
                      id="content"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="min-h-[400px] font-mono text-sm"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="seo" className="space-y-4">
                <div className="bg-card rounded-2xl border border-border p-6 space-y-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Search className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">SEO Settings</h3>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="metaTitle">Meta Title</Label>
                    <Input
                      id="metaTitle"
                      value={metaTitle}
                      onChange={(e) => setMetaTitle(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">
                      {metaTitle.length}/60 characters (recommended)
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="metaDescription">Meta Description</Label>
                    <Textarea
                      id="metaDescription"
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                      rows={3}
                    />
                    <p className="text-xs text-muted-foreground">
                      {metaDescription.length}/160 characters (recommended)
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="keywords">Focus Keywords</Label>
                    <Input
                      id="keywords"
                      placeholder="holter test, 24 hour holter, doorstep ECG"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="canonicalUrl">Canonical URL</Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-input bg-muted text-sm text-muted-foreground">
                        https://holtertest.in
                      </span>
                      <Input
                        id="canonicalUrl"
                        value={selectedPage.slug}
                        className="rounded-l-none"
                      />
                    </div>
                  </div>

                  {/* SEO Preview */}
                  <div className="space-y-2">
                    <Label>Search Preview</Label>
                    <div className="p-4 rounded-lg border border-border bg-muted/30">
                      <p className="text-primary text-lg hover:underline cursor-pointer">
                        {metaTitle || "Page Title"}
                      </p>
                      <p className="text-green-700 text-sm">
                        https://holtertest.in{selectedPage.slug}
                      </p>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {metaDescription || "Add a meta description..."}
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="media" className="space-y-4">
                <div className="bg-card rounded-2xl border border-border p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <ImageIcon className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">Media Library</h3>
                  </div>

                  <div className="border-2 border-dashed border-border rounded-xl p-8 text-center">
                    <ImageIcon className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                    <p className="font-medium mb-1">Drop images here or click to upload</p>
                    <p className="text-sm text-muted-foreground">
                      Supports JPG, PNG, WebP up to 5MB
                    </p>
                    <Button variant="outline" className="mt-4">
                      Browse Files
                    </Button>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm font-medium mb-3">Recent Uploads</p>
                    <div className="grid grid-cols-4 gap-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="aspect-square rounded-lg bg-muted flex items-center justify-center">
                          <ImageIcon className="w-8 h-8 text-muted-foreground" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
