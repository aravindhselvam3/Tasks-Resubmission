import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const notes = [
  {
    id:1,
    content:'FREE',
    list:[{text:"Single User",important:true},
      {text:"5GB Storage",important:true},
      {text:"Unlimited Public Projects",important:true},
      {text:"Community Access",important:false},
      {text:"Unlimited Private Projects",important:false},
      {text:"Dedicated Phone Support",important:false},
      {text:"Free Subdomain",important:false},
      {text:"Monthly Status Reports",important:false},
      ]
  },
  {
    id:2,
    content:'PRO',
    list:[{text:"5 Users",important:true},
    {text:"50GB Storage",important:true},
    {text:"Unlimited Public Projects",important:true},
    {text:"Community Access",important:false},
    {text:"Unlimited Private Projects",important:false},
    {text:"Dedicated Phone Support",important:false},
    {text:"Free Subdomain",important:false},
    {text:"Monthly Status Reports",important:false},
    ]
  },

  {
    id:3,
    content:'PLUS',
    list:[{text:"Unlimited Users",important:true},
    {text:"150GB Storage",important:true},
    {text:"Unlimited Public Projects",important:true},
    {text:"Community Access",important:false},
    {text:"Unlimited Private Projects",important:false},
    {text:"Dedicated Phone Support",important:false},
    {text:"Unlimited Free Subdomains",important:false},
    {text:"Monthly Status Reports",important:false},
    ]
  },
];
ReactDOM.createRoot(document.getElementById('root')).render(<App notes={ notes } />);