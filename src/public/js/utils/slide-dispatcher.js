import React from "react";

import Summary from "../components/slider/charts/summary";
import MechanismOfAction from "../components/slider/charts/mechanism-of-action/mechanism-of-action";
import TreatmentParadigm from "../components/slider/charts/treatment-paradigm/treatment-paradigm";
import PatientProfile from "../components/slider/charts/patient-profile";
import Intro from "../components/slider/charts/intro";
import HeadToHead from "../components/slider/charts/efficacy/head-to-head/head-to-head";
import RapidAndSustained from "../components/slider/charts/efficacy/rapid-and-sustained/rapid-and-sustained";
import DiseaseActivity from "../components/slider/charts/efficacy/disease-activity/disease-activity";
import JointDamageProtection from "../components/slider/charts/efficacy/joint-damage-protection/joint-damage-protection";
import PhysicianGlobalAssessment from "../components/slider/charts/efficacy/physician-global-assessment";
import PatientGlobalAssessment from "../components/slider/charts/efficacy/patient-global-assessment";
import Pain from "../components/slider/charts/pros/pain";
import Function from "../components/slider/charts/pros/function";
import Fatigue from "../components/slider/charts/pros/fatigue";
import BenefitRiskProfile from "../components/slider/charts/safety/benefit-risk-profile/benefit-risk-profile";
import AdverseEvents from "../components/slider/charts/safety/adverse-events";
import TreatmentConsiderations from "../components/slider/charts/safety/treatment-considerations";
import OnceDailyTablet from "../components/slider/charts/dosing/once-daily-tablet";
import EfficacyAcrossTrials from "../components/slider/charts/clinic-trial-overview/efficacy-across-trials";

const DEFAULT_CONFIGS = {
  configs: {
    showHeader: true
  }
};

const getChartComponent =  (slug) => {
  switch (slug) {
  case "summary":
    return {
      ChartContent: Summary,
      configs: {
        showHeader: false
      }
    };
  case "mechanism-of-action":
    return {
      ChartContent: MechanismOfAction,
      ...DEFAULT_CONFIGS
    };
  case "treatment-paradigm":
    return {
      ChartContent: TreatmentParadigm,
      ...DEFAULT_CONFIGS
    };
  case "patient-profile":
    return {
      ChartContent: PatientProfile,
      configs: {
        showHeader: false
      }
    };
  case "intro":
    return {
      ChartContent: Intro,
      configs: {
        showHeader: false
      }
    };
  case "head-to-head":
    return {
      ChartContent: HeadToHead,
      ...DEFAULT_CONFIGS
    };
  case "rapid-and-sustained":
    return {
      ChartContent: RapidAndSustained,
      configs: {
        showHeader: false
      }
    };
  case "disease-activity":
    return {
      ChartContent: DiseaseActivity,
      ...DEFAULT_CONFIGS
    };
  case "joint-damage-protection":
    return {
      ChartContent: JointDamageProtection,
      ...DEFAULT_CONFIGS
    };
  case "physician-global-assessment":
    return {
      ChartContent: PhysicianGlobalAssessment,
      ...DEFAULT_CONFIGS
    };
  case "patient-global-assessment":
    return {
      ChartContent: PatientGlobalAssessment,
      ...DEFAULT_CONFIGS
    };
  case "pain":
    return {
      ChartContent: Pain,
      ...DEFAULT_CONFIGS
    };
  case "function":
    return {
      ChartContent: Function,
      ...DEFAULT_CONFIGS
    };
  case "fatigue":
    return {
      ChartContent: Fatigue,
      ...DEFAULT_CONFIGS
    };
  case "benefit-risk-profile":
    return {
      ChartContent: BenefitRiskProfile,
      configs: {
        showHeader: false
      }
    };
  case "adverse-events":
    return {
      ChartContent: AdverseEvents,
      ...DEFAULT_CONFIGS
    };
  case "treatment-considerations":
    return {
      ChartContent: TreatmentConsiderations,
      ...DEFAULT_CONFIGS
    };
  case "once-daily-tablet":
    return {
      ChartContent: OnceDailyTablet,
      configs: {
        showHeader: false
      }
    };
  case "efficacy-across-trials":
    return {
      ChartContent: EfficacyAcrossTrials,
      ...DEFAULT_CONFIGS
    };
  }
};

export default getChartComponent;