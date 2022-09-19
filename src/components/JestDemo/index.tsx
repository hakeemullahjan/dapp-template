import React, { ChangeEvent, FC, useEffect, useState } from 'react'

type Props = { id?: string; onChange?: () => void }

const JestDemo: FC<Props> = props => {
  const [user, setUser] = useState<{ name: string } | null>(null)
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    if (props.id) fetchUser(props.id)
  }, [props.id])

  async function fetchUser(id: string): Promise<void> {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/' + id,
    )
    const data = await response.json()
    setUser(() => ({
      name: data.name,
    }))
  }
  function onChange(e: ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value)
    props.onChange && props.onChange()
  }

  return (
    <div className="container">
      {user ? (
        <h1>User name is: {user?.name}</h1>
      ) : (
        <h2>user is not logged in</h2>
      )}
      <input type="text" value={value} onChange={onChange} />
    </div>
  )
}

export default JestDemo
