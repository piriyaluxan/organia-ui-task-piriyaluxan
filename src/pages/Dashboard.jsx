import React from "react";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";

export default function Dashboard(){
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>Widget A</Card>
        <Card>Widget B</Card>
      </div>
    </MainLayout>
  );
}
