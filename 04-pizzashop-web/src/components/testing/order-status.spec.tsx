import {describe, expect} from "vitest";
import {render} from '@testing-library/react'
import {OrderStatus} from "../order-status.tsx";
import '@testing-library/jest-dom'

describe('Order Status', () => {

    /* [ pending ] Pendente*/
    it('should display the right tetx based on order status is pending', () => {

        const wrapper = render(<OrderStatus status="pending"/>)


        const statusText = wrapper.getByText('Pendente')
        const badgeElement = wrapper.getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-slate-400')
    })

    /* [ canceled ] Cancelado */
    it('should display the right tetx based on order status is canceled', () => {

        const wrapper = render(<OrderStatus status="canceled"/>)


        const statusText = wrapper.getByText('Cancelado')
        const badgeElement = wrapper.getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-rose-500')
    })

    /* [ delivering ] Em entrega */
    it('should display the right tetx based on order status is delivering', () => {

        const wrapper = render(<OrderStatus status="delivering"/>)


        const statusText = wrapper.getByText('Em entrega')
        const badgeElement = wrapper.getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-amber-500')
    })

    /* [ processing ] Em preparo */
    it('should display the right tetx based on order status is processing', () => {

        const wrapper = render(<OrderStatus status="processing"/>)


        const statusText = wrapper.getByText('Em preparo')
        const badgeElement = wrapper.getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-green-500')
    })

    /* [ processing ] Em preparo */
    it('should display the right tetx based on order status is delivered', () => {

        const wrapper = render(<OrderStatus status="delivered"/>)


        const statusText = wrapper.getByText('Entregue')
        const badgeElement = wrapper.getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-green-500')
    })
})