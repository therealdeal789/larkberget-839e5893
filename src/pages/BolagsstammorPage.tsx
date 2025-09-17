import React from "react";
import LarkbergetNavbar from "@/components/LarkbergetNavbar";
import LarkbergetFooter from "@/components/LarkbergetFooter";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download } from "lucide-react";

const BolagsstammorPage = () => {
  const documentsData = [
    {
      year: "2025",
      documents: [
        { name: "Årsredovisning 2024", url: "https://drive.google.com/file/d/1KfZEcIRHF9iygcBk1yTyoc9Hk-hc_6D0/view?usp=drive_link" },
        { name: "Kallelse årsstämma 2025", url: "https://drive.google.com/file/d/1AYqRCf--i29FAgmHOaE89yqVVtVMDTsW/view?usp=drive_link" }
      ]
    },
    {
      year: "2025 Extra bolagsstämma",
      documents: [
        { name: "CombiGene Fullmaktsförslag EBS 2025", url: "https://drive.google.com/file/d/1E2-vdo3tdoM8evnnqYtLbBnVANvicR-h/view?usp=drive_link" },
        { name: "Kallelse extra bolagsstämma i CombiGene AB", url: "https://drive.google.com/file/d/1IvjDLj4_f8Kvh5PmjamTACZmrvAJ0A-W/view?usp=drive_link" }
      ]
    },
    {
      year: "2024 Extra bolagsstämma",
      documents: [
        { name: "Aktieägarens förslag till ny bolagsordning", url: "https://drive.google.com/file/d/1qwgH3JeamHTbLL632eOfr0iQLadqLl_s/view?usp=drive_link" },
        { name: "Aktieägarens förslag styrelse", url: "https://drive.google.com/file/d/1A3cKBYAJ-95VXfE0LSdr-QKuK6iK6iLg/view?usp=drive_link" },
        { name: "Brev till aktieägare", url: "https://drive.google.com/file/d/1qfJE4h4NgH7Wzlquqk0-mpuv13xPLXEP/view?usp=drive_link" },
        { name: "Fullmaktsformulär", url: "https://drive.google.com/file/d/1wXsqY6cdIaVW4ctLahsomqVMbK7xielK/view?usp=drive_link" },
        { name: "Kallelse EBS 2024", url: "https://drive.google.com/file/d/16WUEYh1kam4nKj2Ep-aYmgKTqpMdi-lD/view?usp=drive_link" },
        { name: "Proxy form EGM 2024", url: "https://drive.google.com/file/d/1K861mlJd_ns_MLLVvwUgsejoE-yBz0ww/view?usp=drive_link" },
        { name: "Shareholders proposal board", url: "https://drive.google.com/file/d/1tW_syWsYynYEfOp-rOhofBkBoUfVQbn3/view?usp=drive_link" },
        { name: "Styrelsens förslag till ny bolagsordning", url: "https://drive.google.com/file/d/1lCZAt2C9l-XmNiGAtE6YTXkhjKyzwSdu/view?usp=drive_link" }
      ]
    },
    {
      year: "2024",
      documents: [
        { name: "Årsredovisning 2023", url: "https://drive.google.com/file/d/1a_D1cgwfcEzEJM1u87dQqvZgEvpFvGi2/view?usp=drive_link" },
        { name: "Förslag till ny bolagsordning 2024", url: "https://drive.google.com/file/d/1dW_wnknB210ShsM-oFKDIMVmDUdtLzQE/view?usp=drive_link" },
        { name: "Fullmaktsformulär 2024", url: "https://drive.google.com/file/d/1EnwtjXIzoA7F4AMeH08xQ4cjZGAouA3-/view?usp=drive_link" },
        { name: "Kallelse årsstämma 2024", url: "https://drive.google.com/file/d/1lKCe9FHZsa53pbONG852C2eEPDULqcKh/view?usp=drive_link" },
        { name: "Kommunike årsstämma 2024", url: "https://drive.google.com/file/d/16FsvgxKgkpZFv1Pw5hX6twfQd6Lum8md/view?usp=drive_link" },
        { name: "Proxy formulär 2024", url: "https://drive.google.com/file/d/1aoavKJllZzrm0GHkVITEye1BuX7MEjDX/view?usp=drive_link" },
        { name: "Valberedningens förslag 2024", url: "https://drive.google.com/file/d/190zHonuNDBM9nNOoV6Q79guHBoE-m7WH/view?usp=drive_link" }
      ]
    },
    {
      year: "2023",
      documents: [
        { name: "Årsredovisning 2022", url: "https://drive.google.com/file/d/1iE3RbS_ouKjvnyhQB_1IxFf15zG6ioAQ/view?usp=drive_link" },
        { name: "Fullmaktsformulär 2023", url: "https://drive.google.com/file/d/1DjnLw0chV2Rd3VfI88LQAeislLF3VQPG/view?usp=drive_link" },
        { name: "Kallelse årsstämma 2023", url: "https://drive.google.com/file/d/1oAiJebpNUDaiARkIANbkTwKm1Bjy4yYO/view?usp=drive_link" },
        { name: "Valberedning 2023", url: "https://drive.google.com/file/d/16-tm-NjkW_fQbjkaia6KFxMGvzY_WNDb/view?usp=drive_link" }
      ]
    },
    {
      year: "2022",
      documents: [
        { name: "Årsredovisning 2021", url: "https://drive.google.com/file/d/1FOlqmjN9DNmJ9biLIIU9TPenqPL3-ZxG/view?usp=drive_link" },
        { name: "Valberedningens förslag 2022", url: "https://drive.google.com/file/d/17TqdHBBVNZi32sAqhk-vLLYbsFP0Xc4T/view?usp=drive_link" },
        { name: "FÖRSLAG: Beslut om leverans och säkringsåtgärder för LTI 2022 Punkt 17", url: "https://drive.google.com/file/d/18lU3SaQib140eOl5OL7ISaZdGPeWMtje/view?usp=drive_link" },
        { name: "FÖRSLAG: Prestationsbaserat incitamentsprogram LTI 2022 Punkt 16", url: "https://drive.google.com/file/d/1biLXTZj2lfX9sXEuhW6t40jf1dbiro7M/view?usp=drive_link" },
        { name: "Kallelse 2022", url: "https://drive.google.com/file/d/1MWTV8qBVoRPm6RE8542QfxSfvzkipdIZ/view?usp=drive_link" },
        { name: "Rösträttsfullmakt", url: "https://drive.google.com/file/d/151tAhTqUofZqJiieEYrejT5jq9AhggLu/view?usp=drive_link" }
      ]
    },
    {
      year: "2021",
      documents: [
        { name: "Rösträttsfullmakt", url: "https://drive.google.com/file/d/1oS2dkUt4CH-Dbuia3YOvKwN0MBchVbjI/view?usp=drive_link" },
        { name: "Kallelse till årsstämma", url: "https://drive.google.com/file/d/1E2MTmBiW2EzlfjlpDUTncNWTk8to4W2G/view?usp=drive_link" },
        { name: "Valberedning", url: "https://drive.google.com/file/d/1nclz-dn6t-yva457mEWSRjMbMbouuLvz/view?usp=drive_link" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-larkberget-50">
      <LarkbergetNavbar />
      
      {/* Hero Section with same background as PressReleasesPage */}
      <section className="bg-gradient-to-br from-larkberget-500 via-trust-700 to-larkberget-900 text-white pt-48 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Bolagsstämmor
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-larkberget-800 mb-8">
                Här hittar du information om Lärkberget AB:s bolagsstämmor, inklusive kallelser, protokoll och andra relevanta dokument.
              </p>

              <div className="bg-larkberget-50 rounded-xl p-8 mb-8 border border-larkberget-200">
                <h2 className="text-2xl font-bold text-larkberget-900 mb-6">Kommande bolagsstämmor</h2>
                <p className="text-larkberget-700">
                  Information om kommande bolagsstämmor kommer att publiceras här när de är tillgängliga.
                </p>
              </div>
            </div>

            {/* Tidigare bolagsstämmor sektion */}
            <div className="bg-white rounded-xl border border-larkberget-200 overflow-hidden shadow-sm">
              <div className="bg-larkberget-100 px-8 py-6 border-b border-larkberget-200">
                <h2 className="text-2xl font-bold text-larkberget-900">Tidigare bolagsstämmor</h2>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-larkberget-200 hover:bg-transparent">
                      <TableHead className="w-1/4 text-larkberget-800 font-semibold">År</TableHead>
                      <TableHead className="w-1/2 text-larkberget-800 font-semibold">Dokument</TableHead>
                      <TableHead className="w-1/4 text-larkberget-800 font-semibold">Ladda ner</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {documentsData.map((yearData, yearIndex) => (
                      yearData.documents.map((doc, docIndex) => (
                        <TableRow key={`${yearIndex}-${docIndex}`} className="border-b border-larkberget-100 hover:bg-larkberget-50">
                          <TableCell className="font-medium text-larkberget-900">
                            {docIndex === 0 ? yearData.year : ""}
                          </TableCell>
                          <TableCell className="text-larkberget-800">{doc.name}</TableCell>
                          <TableCell>
                            <button
                              onClick={() => window.open(doc.url, '_blank')}
                              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-larkberget-700 bg-white border border-larkberget-300 rounded-md hover:bg-larkberget-50 hover:text-larkberget-800 hover:border-larkberget-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-larkberget-500 focus:ring-offset-2"
                            >
                              <Download className="h-4 w-4" />
                              Ladda ner
                            </button>
                          </TableCell>
                        </TableRow>
                      ))
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="bg-larkberget-50 rounded-xl p-8 mt-8 border border-larkberget-200">
              <h2 className="text-2xl font-bold text-larkberget-900 mb-6">Aktieägarinformation</h2>
              <p className="text-larkberget-700 mb-4">
                Som aktieägare i Lärkberget AB har du rätt att delta i bolagsstämmor och utöva din rösträtt.
              </p>
              <p className="text-larkberget-700">
                För frågor angående bolagsstämmor, kontakta oss på info@larkberget.se
              </p>
            </div>
          </div>
        </div>
      </section>

      <LarkbergetFooter />
    </div>
  );
};

export default BolagsstammorPage;
