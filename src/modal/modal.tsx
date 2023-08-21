"use client";
import React, {
    ReactNode,
    useCallback,
    MouseEvent,
    FocusEventHandler,
    useState,
    useContext,
    useEffect
} from "react";
import styles from "./styles/modal";
import { Context } from "../@Hook/app/context";
import CloseButtonTop from "./component/close-button";
import Footer from "./component/footer";







export interface ModalProps {
    children?: ReactNode;
    title?: string | ReactNode;
    open?: boolean;
    center?: boolean,
    borderRadius?: number | string, 
    onClose?: () => void;
};

interface ModalState {
    open: boolean;
};



const loopTimer = (start: number, min: number, onLoop: Function) => {
    onLoop(start);
    if(start > min) {
        setTimeout(() => loopTimer(start - min, min, onLoop), min);
    };
};

const Modal: React.FC<ModalProps> = ({
    children,
    open,
    title,
    center,
    onClose,
    borderRadius,
    ...props
}: ModalProps): JSX.Element | null => {
    const { config } = useContext(Context)
    
    const [modalStore, setModalStore] = useState<ModalState>({
        open: false,
    });

    const closeModal : Function = () : void => {        
        setTimeout(() => {
            setModalStore(p => ({ ...p, open: false }));
        }, config.animation?.animationTime || 0);
    };
    const openModal  : Function = () : void => {
        setModalStore(p => ({ ...p, open: true }));  
    };


    const action = useCallback((actionKey: string) =>
    (e: MouseEvent,...args: any)=> {
        e.stopPropagation();
         switch (actionKey) {
            case "close-modal":
                if(onClose) onClose();
                break;
            default:
                break;
        };
    }, []);



    useEffect(() => {
        if(open) {
            openModal();
        } else {
            closeModal();
        }
    }, [open]);


    return (
        <>
            {
                modalStore.open ?
                <div
                    id="idnd-modal"
                    style={{
                        ...styles.container,
                        alignItems: center ? "center" : "flex-start",
                        paddingTop: 100
                    }}
                    onClick={action("close-modal")}
                >
                    <div
                        style={{
                           ...styles.content,
                           borderRadius: borderRadius || borderRadius == 0 ? borderRadius : 5,
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <CloseButtonTop
                            borderTopRightRadius={borderRadius || borderRadius == 0 ? borderRadius : 5}
                            onClick={action("close-modal")}
                        />
                        <div
                            style={{
                                ...styles.header,
                            }}
                        >
                            <span
                                style={{
                                    ...styles.headerTitle,
                                }}
                            >{ title }</span>
                        </div>
                        <div style={{
                            borderBottom: "solid 1px rgb(100, 100, 100, 0.5)",
                            marginBottom: 10
                        }}/>
                        { children }
                        <Footer></Footer>
                    </div>
                </div> : null
            }
        </>
    ); 
};

export default Modal;

