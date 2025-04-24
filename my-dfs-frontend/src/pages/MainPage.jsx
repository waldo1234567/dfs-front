import React from "react";
import { Navbar, NavbarBrand, Dropdown, DropdownHeader, DropdownItem, Pagination, Badge, Card, Button } from "flowbite-react";
import { FileText, Download } from "lucide-react";

const MainPage = () => {
    const dummyFiles = [
        { id: 1, name: "ProjectProposal.pdf", size: "1.2 MB", date: "2025-04-22" },
        { id: 2, name: "Resume.docx", size: "500 KB", date: "2025-04-20" },
        { id: 3, name: "ImageBackup.zip", size: "12.5 MB", date: "2025-04-18" },
    ];


    return (

        <>
            <div className="min-h-screen bg-gray-50">
                <Navbar fluid rounded className="bg-white border-b px-6 shadow-sm">
                    <NavbarBrand href="#" className="flex items-center gap-2" >
                        <FileText className="text-blue-600" size={28} />
                        <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-900">
                            DFS Storage
                        </span>
                    </NavbarBrand>


                    <div className="flex md:order-2">
                        <Button color="dark">Logout</Button>
                    </div>
                </Navbar>

                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Your Files</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {dummyFiles.map((file) => (
                            <Card key={file.id} className="hover:shadow-lg transform hover:-translate-y-1 transition p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <Badge color="info" size="sm">
                                        {file.name.split(".").pop().toUpperCase()}
                                    </Badge>
                                    <Download
                                        size={20}
                                        className="text-gray-500 hover:text-gray-700 cursor-pointer"
                                    />
                                </div>
                                <div className="flex items-center text-gray-500 mb-3">
                                    <FileText size={18} className="mr-2" />
                                    <span className="text-sm">{file.name}</span>
                                </div>

                                <div className="text-xs text-gray-400">
                                    <p>Size: {file.size}</p>
                                    <p>Uploaded: {file.date}</p>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <div className="flex justify-center mt-8">
                        <Pagination
                            currentPage={1}
                            totalPages={10}
                            onPageChange={_page => {/* handle page change */ }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage;