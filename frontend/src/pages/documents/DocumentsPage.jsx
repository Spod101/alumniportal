import React from "react";
import PageHeader from "../../components/PageHeader";
import DocumentsOverview from "../../components/documents/DocumentsOverview";

export default function DocumentsPage() {
  return (
    <>
      <PageHeader
        titlePart1="Documents & "
        titlePart2="Records"
        subtitle="Access and manage your documents, certificates, and requests."
      />
      <div className="mt-6">
        <DocumentsOverview />
      </div>
    </>
  );
}
