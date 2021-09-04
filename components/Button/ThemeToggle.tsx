import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { styled } from '@stitchesConfig'

const Button = styled('button', {
  backgroundColor: '$mauve3',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$mauve4',
  },
  '&:active': {
    backgroundColor: '$mauve5',
  },
})

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === 'light' ? 'dark' : 'light'
    setTheme(targetTheme)
  }

  return <Button onClick={toggleTheme}>switch theme</Button>
}

export default ThemeToggle
