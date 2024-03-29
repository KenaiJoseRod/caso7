"use strict";(self.webpackChunkcaso_7=self.webpackChunkcaso_7||[]).push([[976],{1512:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>r});var a=o(4848),i=o(8453);const t={sidebar_position:1},s="Ejemplo usando PostMan para facturacion",c={id:"intro",title:"Ejemplo usando PostMan para facturacion",description:"Facturacion electronica",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/caso7/docs/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Api para el formulario",permalink:"/caso7/docs/docDos"}},d={},r=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Accesos",id:"accesos",level:2},{value:"Configuracion Postman",id:"configuracion-postman",level:2},{value:"JSON A ENVIAR",id:"json-a-enviar",level:2},{value:"JSON RESPUESTA",id:"json-respuesta",level:2},{value:"Captura de los resultados en el postman y en la web",id:"captura-de-los-resultados-en-el-postman-y-en-la-web",level:2},{value:"Ejemplo postman",id:"ejemplo-postman",level:3},{value:"Resultado en la web",id:"resultado-en-la-web",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"ejemplo-usando-postman-para-facturacion",children:"Ejemplo usando PostMan para facturacion"}),"\n",(0,a.jsx)(n.p,{children:"Facturacion electronica"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsx)(n.p,{children:"Hemos usado el postman para pobrar el ejemplo del que esta en la documentacion"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"https://fastura.github.io/admin/API-rest-documentacion/Introduccion",children:"https://fastura.github.io/admin/API-rest-documentacion/Introduccion"})})}),"\n",(0,a.jsx)(n.h2,{id:"accesos",children:"Accesos"}),"\n",(0,a.jsx)(n.p,{children:"Inicialmente para hacer el uso de la api, necesitas un token y la url."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["URL: ",(0,a.jsx)(n.a,{href:"https://grupo4.demo.soniviu.com/api/documents",children:"https://grupo4.demo.soniviu.com/api/documents"})]}),"\n",(0,a.jsx)(n.li,{children:"TOKEN: ckvGIvsL50RaDnFKZTdt9eXzABxy7snWxQr6MPn4EOMmPtKJcj"}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{title:"IMPORTANTE",type:"tip",children:(0,a.jsxs)(n.p,{children:["El Token lo puede extraer desde la plataforma en el m\xf3dulo USUARIOS, LOCALES Y SERIES - USUARIOS:\n",(0,a.jsxs)("center",{children:["  ",(0,a.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:o(7734).A+"",children:(0,a.jsx)(n.img,{alt:"Descripci\xf3n de la imagen",src:o(6918).A+"",width:"1916",height:"944"})})]})]})}),"\n",(0,a.jsx)(n.h2,{id:"configuracion-postman",children:"Configuracion Postman"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"M\xe9todo: POST"}),"\n",(0,a.jsxs)(n.li,{children:["URL: ",(0,a.jsx)(n.a,{href:"https://grupo4.demo.soniviu.com/api/documents",children:"https://grupo4.demo.soniviu.com/api/documents"})]}),"\n",(0,a.jsx)(n.li,{children:"TOKEN: ckvGIvsL50RaDnFKZTdt9eXzABxy7snWxQr6MPn4EOMmPtKJcj"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"json-a-enviar",children:"JSON A ENVIAR"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'{\n  "serie_documento": "F001",\n  "numero_documento": "#",\n  "fecha_de_emision": "2024-03-28" <-- se cambio la fecha,\n  "hora_de_emision": "10:11:11",\n  "codigo_tipo_operacion": "0101",\n  "codigo_tipo_documento":"01",\n  "codigo_tipo_moneda": "PEN",\n  "fecha_de_vencimiento":"2024-03-28" <-- se cambio la fecha,\n  "numero_orden_de_compra": "0045467898", \n  "datos_del_cliente_o_receptor":{\n    "codigo_tipo_documento_identidad": "6",\n    "numero_documento": "10414711225",\n    "apellidos_y_nombres_o_razon_social": "EMPRESA XYZ S.A.",\n    "codigo_pais": "PE",\n    "ubigeo": "150101",\n    "direccion": "Av. 2 de Mayo",\n    "correo_electronico": "demo@gmail.com",\n    "telefono": "427-1148"\n  },\n  "totales": {\n    "total_exportacion": 0.00,\n    "total_operaciones_gravadas": 100.00,\n    "total_operaciones_inafectas": 0.00,\n    "total_operaciones_exoneradas": 0.00,\n    "total_operaciones_gratuitas": 0.00,\n    "total_igv": 18.00,\n    "total_impuestos": 18.00,\n    "total_valor": 100,\n    "total_venta": 118\n  },\n  "items":[\n    {\n      "codigo_interno": "P0121",\n      "descripcion":"Inca Kola 250 ml",\n      "codigo_producto_sunat": "51121703",\n      "unidad_de_medida": "NIU",\n      "cantidad": 2,\n      "valor_unitario": 50,\n      "codigo_tipo_precio": "01",\n      "precio_unitario": 59,\n      "codigo_tipo_afectacion_igv": "10",\n      "total_base_igv": 100.00,\n      "porcentaje_igv": 18,\n      "total_igv": 18,\n      "total_impuestos": 18,\n      "total_valor_item": 100,\n      "total_item": 118\n    }\n  ],\n  "informacion_adicional": "Forma de pago:Efectivo|Caja: 1"\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"json-respuesta",children:"JSON RESPUESTA"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'{\n    "success": true,\n    "data": {\n        "number": "F001-4",\n        "filename": "44444444444-01-F001-4",\n        "external_id": "319dbe89-cbab-444e-a3a0-18074c98c5bb",\n        "state_type_id": "05",\n        "state_type_description": "Aceptado",\n        "number_to_letter": "Ciento dieciocho  con 00/100 ",\n        "hash": "vnOgHDDAtAckpLE9Ipwle4AnSUo=",\n        "qr": "iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAgAElEQVR4AQCbgGR",\n        "id": 4\n    },\n    "links": {\n        "xml": "https://grupo4.demo.soniviu.com/downloads/document/xml/319dbe89-cbab-444e-a3a0-18074c98c5bb",\n        "pdf": "https://grupo4.demo.soniviu.com/downloads/document/pdf/319dbe89-cbab-444e-a3a0-18074c98c5bb",\n        "cdr": "https://grupo4.demo.soniviu.com/downloads/document/cdr/319dbe89-cbab-444e-a3a0-18074c98c5bb"\n    },\n    "response": {\n        "code": "0",\n        "description": "La Factura numero F001-4, ha sido aceptada",\n        "notes": []\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"captura-de-los-resultados-en-el-postman-y-en-la-web",children:"Captura de los resultados en el postman y en la web"}),"\n",(0,a.jsx)(n.p,{children:"En esta parte probamos el JSON y verificamos si se envia correctamente a la web"}),"\n",(0,a.jsx)(n.h3,{id:"ejemplo-postman",children:"Ejemplo postman"}),"\n",(0,a.jsxs)("center",{children:["  ",(0,a.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:o(61).A+"",children:(0,a.jsx)(n.img,{alt:"Descripci\xf3n de la imagen",src:o(621).A+"",width:"1920",height:"953"})})]}),"\n",(0,a.jsx)("center",{children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:o(7812).A+"",children:(0,a.jsx)(n.img,{alt:"Descripci\xf3n de la imagen",src:o(1444).A+"",width:"1392",height:"532"})})})}),"\n",(0,a.jsx)(n.h3,{id:"resultado-en-la-web",children:"Resultado en la web"}),"\n",(0,a.jsxs)("center",{children:[" ",(0,a.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:o(6850).A+"",children:(0,a.jsx)(n.img,{alt:"Descripci\xf3n de la imagen",src:o(226).A+"",width:"1920",height:"953"})})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},61:(e,n,o)=>{o.d(n,{A:()=>a});const a=o.p+"assets/files/IMG2-b8d8052c1e0317d897c7e7a50614648c.png"},7734:(e,n,o)=>{o.d(n,{A:()=>a});const a=o.p+"assets/files/img1-8855d392fafc5ff67e9c7d205e15b382.png"},7812:(e,n,o)=>{o.d(n,{A:()=>a});const a=o.p+"assets/files/img3-7ac546cd332805ecd91a2a24dd10aa69.png"},6850:(e,n,o)=>{o.d(n,{A:()=>a});const a=o.p+"assets/files/img5-3da81be8de21471beede839d783c9c70.png"},621:(e,n,o)=>{o.d(n,{A:()=>a});const a=o.p+"assets/images/IMG2-b8d8052c1e0317d897c7e7a50614648c.png"},6918:(e,n,o)=>{o.d(n,{A:()=>a});const a=o.p+"assets/images/img1-8855d392fafc5ff67e9c7d205e15b382.png"},1444:(e,n,o)=>{o.d(n,{A:()=>a});const a=o.p+"assets/images/img3-7ac546cd332805ecd91a2a24dd10aa69.png"},226:(e,n,o)=>{o.d(n,{A:()=>a});const a=o.p+"assets/images/img5-3da81be8de21471beede839d783c9c70.png"},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>c});var a=o(6540);const i={},t=a.createContext(i);function s(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);