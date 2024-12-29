import {HeaderContainer, HeaderContent, NewTransactionButton} from "./styles.ts";
import * as Dialog from '@radix-ui/react-dialog'
import logoImg from '../../assets/ignite-logo.svg';
import {DialogTrigger} from "@radix-ui/react-dialog";
import {NewTransationModal} from "../NewTransationModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt=""/>

                <Dialog.Root>
                    <DialogTrigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </DialogTrigger>

                    <NewTransationModal/> {/*Component do modal*/}

                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}