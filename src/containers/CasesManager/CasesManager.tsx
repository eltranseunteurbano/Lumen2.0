import React, { useState, useEffect } from "react";
import Cases from "../../components/Cases/Cases/Cases";
import { ViewCase } from "../../components/ViewCase/ViewCase";
import Servicio from '../../objects/Service';

import { useContext } from 'react';
import ServicesContext from "../../hooks/ServicesContext";

import "./CasesManager.scss";
import ViewReview from "../../components/ViewReview/ViewReview";
import MenuCase from '../../components/MenuCase/MenuCase';

interface IPropsCasesManager { }


export function CasesManager(props: IPropsCasesManager) {

    const servicesManager = useContext(ServicesContext);

    const [page, setPage] = useState(0);
    const [currentCase, setCurrentCase] = useState<Servicio>(new Servicio());

    useEffect(() => {

        servicesManager.addUpdate("page", setPage);
        servicesManager.addUpdate("service", setCurrentCase);

    }, []);

    return <div className="CasesManager">
        <div className="CasesManager__menu">
            <MenuCase setPage={setPage} />
        </div>
        <div className="CasesManager__information">
            {page === 0 ?
                <Cases update={setCurrentCase} updatePage={setPage} />
                :
                page === 1 ?
                    <ViewCase service={currentCase} />
                    : page === 2 ?

                        <ViewReview service={currentCase} />
                        : ""
            }
        </div>


    </div>
}

export default CasesManager;

CasesManager.Proyects = 0;
CasesManager.Notifications = 3;