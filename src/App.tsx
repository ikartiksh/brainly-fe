import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/plusicon'
import { ShareIcon } from './icons/shareicon'
import { Card } from './components/ui/Card'

function App() {
  const [count, setCount] = useState(0)

return (
  <div className="p-3">
<div className="flex justify-end gap-4">
  <Button startIcon= {< PlusIcon size={'lg'} />} size="sm" variant="primary" text="Add Content"/>
  <Button startIcon={<ShareIcon size={'lg'}/>} size="sm"variant="secondary" text="Share"/>
  </div>

  <Card type="twitter" link="https://x.com/reet_rpsc/status/1127047944417546240" title="first tweet"/>
  <Card type="youtube" link="https://youtu.be/Cc33wOBAKDM" title="yt"/>
</div>
)
}
export default App