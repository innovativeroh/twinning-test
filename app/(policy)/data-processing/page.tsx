"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { usePolicy } from "../../../hooks/usePolicies";
import Loading from "../../../components/ui/Loading";
import Error from "../../../components/ui/Error";
import PolicyContent from "@/components/policy-pages/PolicyContent";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/core/Header";

const DataProcessingPage: React.FC = () => {
  const {
    data: policyResponse,
    loading,
    error,
  } = usePolicy("data_processing_agreement");

  if (loading)
    return (
      <>
        <Header />
        <div className="min-h-screen bg-[#090909] text-white flex items-center justify-center">
          <Loading />
        </div>
      </>
    );

  if (error)
    return (
      <>
        <Header />
        <div className="min-h-screen bg-[#090909] text-white flex items-center justify-center">
          <Error message={error} />
        </div>
      </>
    );

  if (!policyResponse?.data)
    return (
      <>
        <Header />
        <div className="min-h-screen bg-[#090909] text-white flex items-center justify-center">
          <Error message="Data processing agreement not found" />
        </div>
      </>
    );

  return (
    <>
      <Head>
        <title>Data Processing Agreement - Twinning Labs</title>
        <meta
          name="description"
          content="Learn about our data processing practices and your rights."
        />
      </Head>
      <Header />
      <div className="min-h-screen bg-[#090909] text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
          <PolicyContent policy={policyResponse.data} />
        </div>
      </div>
    </>
  );
};

export default DataProcessingPage;
