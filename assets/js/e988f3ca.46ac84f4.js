"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[142],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),p=a,h=c["".concat(s,".").concat(p)]||c[p]||m[p]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={},o="Radio Models",l={unversionedId:"rf_modeling/Radio_Models",id:"rf_modeling/Radio_Models",title:"Radio Models",description:"In this section a joint model of Baseband and RF up/down-conversion is",source:"@site/../docs/rf_modeling/Radio_Models.md",sourceDirName:"rf_modeling",slug:"/rf_modeling/Radio_Models",permalink:"/terragraph-planner/rf_modeling/Radio_Models",draft:!1,editUrl:"https://github.com/terragraph/terragraph-planner/edit/main/docs/../docs/rf_modeling/Radio_Models.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Antenna Front End",permalink:"/terragraph-planner/rf_modeling/Antenna_Front_End"},next:{title:"Propagation Models",permalink:"/terragraph-planner/rf_modeling/Propagation_Models"}},s={},d=[{value:"RF Front End",id:"rf-front-end",level:2},{value:"Baseband",id:"baseband",level:2}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"radio-models"},"Radio Models"),(0,a.kt)("p",null,"In this section a joint model of Baseband and RF up/down-conversion is\ndescribed. The model is primarily driven by the following input parameters:"),(0,a.kt)("h2",{id:"rf-front-end"},"RF Front End"),(0,a.kt)("p",null,"This module interfaces with the antenna subsystem and the Baseband. The key\nfunctionality of this module is to up/down-convert the signals to/from higher\nfrequencies (mixing)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Maximum Tx Power"),": Maximum Transmit Power in dBm. Different manufacturers\nhave different limits on the maximum allowed transmit power. The transmit\npower control (TPC) algorithm programmed in the tool will use this as the\nupper limit while trying to identify the best transmit power for each unit."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Minimum Tx Power"),": Minimum Transmit Power in dBm. Similar to the Max Tx\npower, there is a minimum Tx power for each manufacturer\u2019s equipment and is\nalso used as a lower limit in the TPC algorithm."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Maximum EIRP"),": Maximum Equivalent/Effective Isotropically Radiated Power\nin dBm. This is typically set by the regulatory bodies in the deployment area.\nThe TPC takes this into account and caps the max power such that the sum of\nTx power and antenna boresight gain does not exceed the Maximum EIRP limit."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Tx Miscellaneous Loss"),": Miscellaneous losses on the transmitter in dB.\nThese can include, but not limted to cable/connector losses, RF hardware\nmismatch losses."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Rx Miscellaneous Loss"),": Miscellaneous losses on the receiver in dB.\nThese can include, but not limited to cable/connector losses, RF hardware\nmismatch losses."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Frequency"),": Frequency (in MHz) at which these sectors operate."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Noise Figure"),": A critical link budget factor that degrades the received\nSNR. The Noise Figure (NF) is defined in dB and formulated in log scale as\nthe degradation of SNR. i.e. NF = SNR input - SNR output. In\n",(0,a.kt)("a",{parentName:"li",href:"/terragraph-planner/rf_modeling/Link_Budget_Calculations"},"Link Budget Calculations")," we\nshow the formulation on NF in link budget calculation")),(0,a.kt)("h2",{id:"baseband"},"Baseband"),(0,a.kt)("p",null,"The Baseband module, as a receiver, receives down-converted signals from the RF\nfront end and extracts data (as bits) from these signals. As a transmitter,\nprovides input signals to the RF front-end for up-conversion to higher\nfrequencies. The following terms are tied to the SNR gains achieved"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Tx Diversity Gain"),": Transmitter diversity gain in dB. This could be\nachieved due to polarization diversity or any other spatial diversity scheme."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Rx Diversity Gain"),": Receiver diversity gain in dB. This could be achieved\ndue to polarization diversity or any other spatial diversity scheme."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Minimum MCS Level"),": The minimum MCS level allowed. This could be forcefully\nset to a higher value to always guarantee a certain MCS in all links."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Thermal Noise Power"),": Thermal noise power (dBm) is used in the link budget\ncalculations to capture the noise floor level. This is dependent on system\ntemperature and bandwidth used. A detailed formulation is given in\n",(0,a.kt)("a",{parentName:"li",href:"/terragraph-planner/rf_modeling/Link_Budget_Calculations"},"Link Budget Calculations"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"MCS Map File"),": A CSV file that contains the mapping between MCS, SNR and\nMbps where Mbps represents effective download rate. There must be exactly\none column with headers \u201dmcs\u201d, \u201dsnr\u201d and \u201dmbps\u201d.")))}m.isMDXComponent=!0}}]);