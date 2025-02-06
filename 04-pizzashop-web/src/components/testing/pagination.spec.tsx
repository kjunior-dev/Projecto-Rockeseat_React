import {describe, expect} from "vitest";
import {render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Pagination} from "../pagination.tsx";

const onPageChangeCallback= vi.fn()

 describe('Pagination', () => {

     beforeEach(() => {
         onPageChangeCallback.mockClear()
     })

    it('should display the right amount of page and results', async () => {

        const wrapper = render(
            <Pagination
                pageIndex={0}
                totalCount={200}
                perPage={10}
                onPageChange={onPageChangeCallback}
            />
        )

        expect(wrapper.getByText('Pagina 1 de 20')).toBeInTheDocument()
        expect(wrapper.getByText('Total de 200 item(s)')).toBeInTheDocument()
    });

    it('should be able to navicate to the next page', async () => {

        const user = userEvent.setup()

        const wrapper = render(
            <Pagination
                pageIndex={0}
                totalCount={200}
                perPage={10}
                onPageChange={onPageChangeCallback}
            />
        )

        const nextPageButton = wrapper.getByRole('button', {
            name: 'Proxima Pagina'
        })

         await user.click(nextPageButton)
        expect(onPageChangeCallback).toHaveBeenCalledWith(1)
    });

    it('should be able to navicate to the previous page', async () => {
        const user = userEvent.setup()

        const wrapper = render(
            <Pagination
                pageIndex={5}
                totalCount={200}
                perPage={10}
                onPageChange={onPageChangeCallback}
            />
        )

        const nextPageButton = wrapper.getByRole('button', {
            name: 'Pagina anterior'
        })

         await user.click(nextPageButton)
        console.log(onPageChangeCallback.mock.calls)

        expect(onPageChangeCallback).toHaveBeenCalledWith(4)
    });

    it('should be able to navicate to the firts page', async () => {

        const user = userEvent.setup()

        const wrapper = render(
            <Pagination
                pageIndex={5}
                totalCount={200}
                perPage={10}
                onPageChange={onPageChangeCallback}
            />
        )

        const nextPageButton = wrapper.getByRole('button', {
            name: 'Primeira Pagina'
        })

         await user.click(nextPageButton)
        expect(onPageChangeCallback).toHaveBeenCalledWith(0)
    });

    it('should be able to navicate to the last page', async () => {

        const user = userEvent.setup()

        const wrapper = render(
            <Pagination
                pageIndex={0}
                totalCount={200}
                perPage={10}
                onPageChange={onPageChangeCallback}
            />
        )

        const nextPageButton = wrapper.getByRole('button', {
            name: 'Ultima Pagina'
        })

        await user.click(nextPageButton)
        expect(onPageChangeCallback).toHaveBeenCalledWith(19)
    });
})