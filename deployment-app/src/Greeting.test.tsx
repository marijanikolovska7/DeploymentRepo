import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Greeting } from './Greeting'

describe('Greeting component', () => {
    it('renders hello message with the provided name', () => {
        render(<Greeting name="Marija" />)
        expect(screen.getByText('Hello, Marija!')).toBeInTheDocument()
    })
})
