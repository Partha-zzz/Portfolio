"use client";

import React, { useState } from "react";
import { Database, Cpu, Activity, BarChart2 } from "lucide-react";

interface PipelineStage {
  id: string;
  number: string;
  name: string;
  icon: React.ReactNode;
  summary: string;
  details: { label: string; value: string }[];
  accentColor: string;
}

const STAGES: PipelineStage[] = [
  {
    id: "data",
    number: "01",
    name: "DATA",
    icon: <Database className="w-5 h-5 stroke-[2.5]" />,
    summary: "20,640 records from California Housing Census dataset",
    details: [
      { label: "Total Records", value: "20,640 Census Block Groups" },
      { label: "Target Feature", value: "median_house_value" },
      { label: "Sampling Strategy", value: "Stratified Split on income_cat (80/20)" },
    ],
    accentColor: "bg-[#FFD600] text-[#111111]",
  },
  {
    id: "preprocess",
    number: "02",
    name: "PREPROCESS",
    icon: <Cpu className="w-5 h-5 stroke-[2.5]" />,
    summary: "Scikit-Learn ColumnTransformer pipeline without data leakage",
    details: [
      { label: "Imputation", value: "SimpleImputer(strategy='median')" },
      { label: "Scaling", value: "StandardScaler on numerical features" },
      { label: "Encoding", value: "OneHotEncoder(handle_unknown='ignore')" },
    ],
    accentColor: "bg-[#635BFF] text-white",
  },
  {
    id: "model",
    number: "03",
    name: "RANDOM FOREST",
    icon: <Activity className="w-5 h-5 stroke-[2.5]" />,
    summary: "RandomForestRegressor fitted on preprocessed training split",
    details: [
      { label: "Model Architecture", value: "RandomForestRegressor(random_state=42)" },
      { label: "Artifact Saver", value: "Joblib persisted pipeline + model" },
      { label: "Input Features", value: "Longitude, Latitude, Income, Rooms, Bedrms..." },
    ],
    accentColor: "bg-[#111111] dark:bg-[#F7F7F2] text-white dark:text-[#111111]",
  },
  {
    id: "prediction",
    number: "04",
    name: "PREDICTION",
    icon: <BarChart2 className="w-5 h-5 stroke-[2.5]" />,
    summary: "Evaluated on 20% held-out test set predictions",
    details: [
      { label: "Reported Test RMSE", value: "$47,197.67" },
      { label: "Train/Test Split", value: "80% Train / 20% Test" },
      { label: "Output Artifact", value: "output.csv actual vs predicted values" },
    ],
    accentColor: "bg-[#FFD600] text-[#111111]",
  },
];

export default function InteractiveMLPipeline() {
  const [activeStageId, setActiveStageId] = useState<string>("data");
  const activeStage = STAGES.find((s) => s.id === activeStageId) || STAGES[0];

  return (
    <div className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-8 brutal-shadow-md my-8 transition-colors">
      <div className="flex items-center justify-between border-b-2 border-[#111111] dark:border-[#F7F7F2] pb-4 mb-6">
        <span className="font-mono text-xs font-black uppercase bg-[#FFD600] text-[#111111] px-3 py-1 border-2 border-[#111111] rounded brutal-shadow-sm">
          INTERACTIVE ML ENGINE ⚡
        </span>
        <span className="font-mono text-xs font-bold text-[#111111]/70 dark:text-[#F7F7F2]/70">
          CLICK ANY STAGE TO INSPECT
        </span>
      </div>

      {/* Stage Selector Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {STAGES.map((stage) => {
          const isActive = stage.id === activeStageId;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`p-3.5 border-2 border-[#111111] dark:border-[#F7F7F2] rounded-xl font-mono text-xs font-black text-left flex flex-col justify-between gap-2 transition-all brutal-shadow-sm ${
                isActive
                  ? stage.accentColor + " translate-x-[2px] translate-y-[2px]"
                  : "bg-[#F7F7F2] dark:bg-[#242424] text-[#111111] dark:text-[#F7F7F2] hover:bg-white dark:hover:bg-[#303030]"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-[11px] opacity-80">{stage.number}</span>
                {stage.icon}
              </div>
              <span className="font-extrabold uppercase">{stage.name}</span>
            </button>
          );
        })}
      </div>

      {/* Stage Inspection Panel */}
      <div className="bg-[#111111] text-[#F7F7F2] border-3 border-[#111111] rounded-xl p-5 font-mono text-xs brutal-shadow-sm">
        <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-4">
          <span className="font-black text-[#FFD600] uppercase text-sm">
            STAGE {activeStage.number} — {activeStage.name} INSPECTION
          </span>
          <span className="text-[10px] bg-[#242424] text-[#FFD600] px-2 py-0.5 rounded border border-white/20 font-bold">
            VERIFIED STAGE
          </span>
        </div>

        <p className="text-sm font-bold text-[#F7F7F2]/90 mb-4 leading-relaxed">
          {activeStage.summary}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {activeStage.details.map((detail, idx) => (
            <div
              key={idx}
              className="bg-[#242424] p-3 rounded-lg border border-white/10"
            >
              <span className="block text-[10px] text-[#FFD600] font-black uppercase mb-1">
                {detail.label}
              </span>
              <span className="font-bold text-white text-xs">{detail.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
