import { ModeToggle } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Header() {
    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "G_Venkata_Sandeep_Reddy_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="top-0 flex items-center justify-between gap-4">
            <ModeToggle />
            <Button 
                onClick={downloadResume}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
            >
                <Download size={16} />
                Resume
            </Button>
        </div>
    );
}
