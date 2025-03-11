import { ApiReferenceReact } from '@scalar/api-reference-react'
import '@scalar/api-reference-react/style.css'

function App() {
  return (
    <ApiReferenceReact
      configuration={{
        spec: {
          url: 'https://api.api-fiddle.com/v1/public/resources/oas_api_3_1/dennis-isakssons-organization-7qe/cold-giraffe-15qf',
        },
      }}
    />
  )
}

export default App