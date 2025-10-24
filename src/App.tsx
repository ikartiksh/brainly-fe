import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/plusicon'
import { ShareIcon } from './icons/shareicon'

function App() {
  const [count, setCount] = useState(0)

return (
<>
  <Button startIcon= {< PlusIcon size={'lg'} />} size="sm" variant="primary" text="Add Content"/>
  <Button startIcon={<ShareIcon size={'lg'}/>} size="sm"variant="secondary" text="Share"/>
  <Button size="lg"variant="secondary" text="Add"/>
</>
)
}
export default App