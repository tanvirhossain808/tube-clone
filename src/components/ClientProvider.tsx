"use client"

import appStore from "@/store/appStore";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";


interface children {
    children: ReactNode
}
const ClientProvider: FC<children> = ({ children }) => {
    return (
        <>
            <Provider store={appStore}>
                <div>
                    {children}
                </div>
            </Provider>
        </>
    );
};

export default ClientProvider;