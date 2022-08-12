"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[53],{1109:function(i){i.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"Terragraph Planner Documentation","href":"/terragraph-planner/","docId":"README"},{"type":"category","label":"Runbook","items":[{"type":"link","label":"Quick Start","href":"/terragraph-planner/runbook/Quick_Start","docId":"runbook/Quick_Start"},{"type":"link","label":"Input Files","href":"/terragraph-planner/runbook/Input_Files","docId":"runbook/Input_Files"},{"type":"link","label":"Output Files","href":"/terragraph-planner/runbook/Output_Files","docId":"runbook/Output_Files"},{"type":"link","label":"Features","href":"/terragraph-planner/runbook/Features","docId":"runbook/Features"}],"collapsed":true,"collapsible":true,"href":"/terragraph-planner/runbook/"},{"type":"category","label":"Algorithm","items":[{"type":"category","label":"Line-of-Sight","items":[{"type":"link","label":"Easy Negative Cases","href":"/terragraph-planner/algorithm/line_of_sight/Easy_Negative_Cases","docId":"algorithm/line_of_sight/Easy_Negative_Cases"},{"type":"link","label":"Confidence Level","href":"/terragraph-planner/algorithm/line_of_sight/Confidence_Level","docId":"algorithm/line_of_sight/Confidence_Level"},{"type":"link","label":"Cylindrical Model","href":"/terragraph-planner/algorithm/line_of_sight/Cylindrical_Model","docId":"algorithm/line_of_sight/Cylindrical_Model"},{"type":"link","label":"Ellipsoidal Model","href":"/terragraph-planner/algorithm/line_of_sight/Ellipsoidal_Model","docId":"algorithm/line_of_sight/Ellipsoidal_Model"}],"collapsed":true,"collapsible":true,"href":"/terragraph-planner/algorithm/line_of_sight/"},{"type":"category","label":"Optimization","items":[{"type":"link","label":"Overview","href":"/terragraph-planner/algorithm/optimization/Overview","docId":"algorithm/optimization/Overview"},{"type":"link","label":"Notation","href":"/terragraph-planner/algorithm/optimization/Notation","docId":"algorithm/optimization/Notation"},{"type":"link","label":"Cost Minimization","href":"/terragraph-planner/algorithm/optimization/Cost_Minimization","docId":"algorithm/optimization/Cost_Minimization"},{"type":"link","label":"Coverage Maximization","href":"/terragraph-planner/algorithm/optimization/Coverage_Maximization","docId":"algorithm/optimization/Coverage_Maximization"},{"type":"link","label":"Cost Minimization with Redundancy","href":"/terragraph-planner/algorithm/optimization/Redundancy_Optimization","docId":"algorithm/optimization/Redundancy_Optimization"},{"type":"link","label":"Interference Minimization","href":"/terragraph-planner/algorithm/optimization/Interference_Minimization","docId":"algorithm/optimization/Interference_Minimization"},{"type":"link","label":"Connected Demand Site Optimization","href":"/terragraph-planner/algorithm/optimization/Connected_Demand","docId":"algorithm/optimization/Connected_Demand"},{"type":"link","label":"Flow Optimization","href":"/terragraph-planner/algorithm/optimization/Flow_Optimization","docId":"algorithm/optimization/Flow_Optimization"},{"type":"link","label":"Future Directions","href":"/terragraph-planner/algorithm/optimization/Future_Directions","docId":"algorithm/optimization/Future_Directions"}],"collapsed":true,"collapsible":true,"href":"/terragraph-planner/algorithm/optimization/"}],"collapsed":true,"collapsible":true,"href":"/terragraph-planner/algorithm/"},{"type":"category","label":"RF Modeling","items":[{"type":"link","label":"System Architecture & Topology","href":"/terragraph-planner/rf_modeling/System_Architecture_And_Topology","docId":"rf_modeling/System_Architecture_And_Topology"},{"type":"link","label":"Antenna Front End","href":"/terragraph-planner/rf_modeling/Antenna_Front_End","docId":"rf_modeling/Antenna_Front_End"},{"type":"link","label":"Radio Models","href":"/terragraph-planner/rf_modeling/Radio_Models","docId":"rf_modeling/Radio_Models"},{"type":"link","label":"Propagation Models","href":"/terragraph-planner/rf_modeling/Propagation_Models","docId":"rf_modeling/Propagation_Models"},{"type":"link","label":"Link Budget Calculations","href":"/terragraph-planner/rf_modeling/Link_Budget_Calculations","docId":"rf_modeling/Link_Budget_Calculations"}],"collapsed":true,"collapsible":true,"href":"/terragraph-planner/rf_modeling/"}]},"docs":{"algorithm/line_of_sight/Confidence_Level":{"id":"algorithm/line_of_sight/Confidence_Level","title":"Confidence Level","description":"The confidence level describes how confident the planner is about the valid","sidebar":"docs"},"algorithm/line_of_sight/Cylindrical_Model":{"id":"algorithm/line_of_sight/Cylindrical_Model","title":"Cylindrical Model","description":"The cylindrical model is a simplified model from the ellipsoidal model.","sidebar":"docs"},"algorithm/line_of_sight/Easy_Negative_Cases":{"id":"algorithm/line_of_sight/Easy_Negative_Cases","title":"Easy Negative Cases","description":"There are 4 easy negative cases for both 2 models, which is coded in","sidebar":"docs"},"algorithm/line_of_sight/Ellipsoidal_Model":{"id":"algorithm/line_of_sight/Ellipsoidal_Model","title":"Ellipsoidal Model","description":"The ellipsoidal model is more practical and theoretically more accurate","sidebar":"docs"},"algorithm/line_of_sight/README":{"id":"algorithm/line_of_sight/README","title":"Line-of-Sight","description":"This doc describes how TG Planner determine whether a Line-of-Sight(LOS) link","sidebar":"docs"},"algorithm/optimization/Connected_Demand":{"id":"algorithm/optimization/Connected_Demand","title":"Connected Demand Site Optimization","description":"In both Cost Minimization,","sidebar":"docs"},"algorithm/optimization/Cost_Minimization":{"id":"algorithm/optimization/Cost_Minimization","title":"Cost Minimization","description":"The planner first designs a base mininmum cost network that ensures that the","sidebar":"docs"},"algorithm/optimization/Coverage_Maximization":{"id":"algorithm/optimization/Coverage_Maximization","title":"Coverage Maximization","description":"There are two methods for adding redundancy to the base minimum cost network.","sidebar":"docs"},"algorithm/optimization/Flow_Optimization":{"id":"algorithm/optimization/Flow_Optimization","title":"Flow Optimization","description":"Once a network design is complete, we compute the optimal flow in the network","sidebar":"docs"},"algorithm/optimization/Future_Directions":{"id":"algorithm/optimization/Future_Directions","title":"Future Directions","description":"P2MP Constraints in Site Selection","sidebar":"docs"},"algorithm/optimization/Interference_Minimization":{"id":"algorithm/optimization/Interference_Minimization","title":"Interference Minimization","description":"After site selection is complete and finalized, the next step selects the links","sidebar":"docs"},"algorithm/optimization/Notation":{"id":"algorithm/optimization/Notation","title":"Notation","description":"Parameters","sidebar":"docs"},"algorithm/optimization/Overview":{"id":"algorithm/optimization/Overview","title":"Overview","description":"Problem Modeling","sidebar":"docs"},"algorithm/optimization/README":{"id":"algorithm/optimization/README","title":"Optimization","description":"This doc describes the TG Planner optimization workflow and algorithms. It","sidebar":"docs"},"algorithm/optimization/Redundancy_Optimization":{"id":"algorithm/optimization/Redundancy_Optimization","title":"Cost Minimization with Redundancy","description":"Due to some shortcomings in the formulation","sidebar":"docs"},"algorithm/README":{"id":"algorithm/README","title":"Terragraph Planner Algorithm","description":"This directory describes the algorithm used by the Terragraph Planner in two sections:","sidebar":"docs"},"README":{"id":"README","title":"Terragraph Planner Documentation","description":"The Terragraph planner uses a combination of Geographic Information System (GIS)","sidebar":"docs"},"rf_modeling/Antenna_Front_End":{"id":"rf_modeling/Antenna_Front_End","title":"Antenna Front End","description":"A typical antenna subsystem used in a 60 GHz radio equipment has multiple","sidebar":"docs"},"rf_modeling/Link_Budget_Calculations":{"id":"rf_modeling/Link_Budget_Calculations","title":"Link Budget Calculations","description":"Given all the assumptions, models and calculations we have seen in the above","sidebar":"docs"},"rf_modeling/Propagation_Models":{"id":"rf_modeling/Propagation_Models","title":"Propagation Models","description":"FSPL","sidebar":"docs"},"rf_modeling/Radio_Models":{"id":"rf_modeling/Radio_Models","title":"Radio Models","description":"In this section a joint model of Baseband and RF up/down-conversion is","sidebar":"docs"},"rf_modeling/README":{"id":"rf_modeling/README","title":"RF Modeling for Terragraph Network Planning","description":"This document provides an in-depth description of the RF modeling and","sidebar":"docs"},"rf_modeling/System_Architecture_And_Topology":{"id":"rf_modeling/System_Architecture_And_Topology","title":"System Architecture & Topology","description":"A simplified architecture is assumed for the purpose of modeling various RF","sidebar":"docs"},"runbook/Features":{"id":"runbook/Features","title":"Features","description":"Multi-SKU","sidebar":"docs"},"runbook/Input_Files":{"id":"runbook/Input_Files","title":"Input Files","description":"This page introduces the input files used in a Terragraph network plan, including","sidebar":"docs"},"runbook/Output_Files":{"id":"runbook/Output_Files","title":"Output Files","description":"This page describes all the possible output files from the Terragraph Planner,","sidebar":"docs"},"runbook/Quick_Start":{"id":"runbook/Quick_Start","title":"Quick Start","description":"The Terragraph Planner is an open-source Python library developed for operators","sidebar":"docs"},"runbook/README":{"id":"runbook/README","title":"Terragraph Planner Runbook","description":"This document demonstrates how to run a plan using the Terragraph Planner","sidebar":"docs"}}}')}}]);