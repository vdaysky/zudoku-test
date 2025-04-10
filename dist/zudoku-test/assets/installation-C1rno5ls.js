import{H as o,j as n}from"./entry.client-EcnGnfUF.js";const l="This guide will help you install and use the Python SDK generated by OpenAPI Generator.",s=[{depth:2,value:"Installation",id:"installation"},{depth:2,value:"Usage",id:"usage",children:[{depth:3,value:"Example",id:"example"}]}],r={title:"Installation and Usage of Python SDK"};function i(t){const e={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"This guide will help you install and use the Python SDK generated by OpenAPI Generator."}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsx(e.p,{children:"To install the SDK, you need to have Python and pip installed on your system. Follow the steps below to install the SDK:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"Clone the repository:"})}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`git clone <repository_url>
cd <repository_directory>
`})}),`
`,n.jsxs(e.ol,{start:"2",children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"Install the SDK:"})}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`pip install .
`})}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.p,{children:"Once the SDK is installed, you can use it to interact with the API. Below is an example of how to use the SDK."}),`
`,n.jsx(e.h3,{id:"example",children:"Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-python",children:`from openapi_client.api_client import ApiClient
from openapi_client.configuration import Configuration
from openapi_client.api.default_api import DefaultApi

# Create a configuration instance
config = Configuration()
config.access_token = 'your_jwt_token_here'

# Create an ApiClient instance with the configuration
api_client = ApiClient(configuration=config)

# Create an instance of the API class
api_instance = DefaultApi(api_client)

# Example: Get all projects
try:
    response = api_instance.get_projects()
    print(response)
except Exception as e:
    print("Exception when calling DefaultApi->get_projects: %s\\n" % e)
`})})]})}function c(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{c as default,l as excerpt,r as frontmatter,s as tableOfContents};
//# sourceMappingURL=installation-C1rno5ls.js.map
