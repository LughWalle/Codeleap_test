import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Card, Input, Modal } from '../components'

function App() {
  const [count, setCount] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <div style={{ marginTop: 12 }}>
          <Input
            placeholder="Exemplo de Input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <section style={{ maxWidth: 900, margin: '24px auto' }}>
        <h2>Exemplos de Components</h2>

        <Card title="My First Post at CodeLeap Network!" variant="primary">
          <p style={{ margin: 0, fontWeight: 700 }}>@Victor</p>
          <p style={{ marginTop: 8 }}>Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </Card>

        <Card title="Another Post (default)" style={{ marginTop: 16 }}>
          <p style={{ margin: 0 }}>This card shows the header without the primary color.</p>
        </Card>

        <div style={{ marginTop: 16 }}>
          <Button onClick={() => setModalOpen(true)}>
            Abrir Modal de Exemplo
          </Button>
        </div>

        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <div style={{ background: '#fff', padding: 24, borderRadius: 8, maxWidth: 480 }}>
            <h3>Modal de Exemplo</h3>
            <p>Valor do Input: {inputValue || '(vazio)'}</p>
            <div style={{ marginTop: 12 }}>
              <Button onClick={() => setModalOpen(false)}>Fechar</Button>
            </div>
          </div>
        </Modal>
      </section>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
