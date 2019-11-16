import React, { useState, useEffect, useContext } from "react";
import ServicesContext from "../../hooks/ServicesContext";
import Servicio from '../../objects/Service';
import Cases from '../../components/Cases/Cases/Cases';
import { ViewCase } from "../../components/ViewCase/ViewCase";
import ViewReview from "../../components/ViewReview/ViewReview";
import MenuCase from '../../components/MenuCase/MenuCase';

import "./CasesManager.scss";
import BarTitle from '../../components/BarTitle/BarTitle';


interface IPropsCasesManager { }


export function CasesManager(props: IPropsCasesManager) {

    const servicesManager = useContext(ServicesContext);

    const [page, setPage] = useState(0);
    const [currentCase, setCurrentCase] = useState<Servicio>(new Servicio());

    servicesManager.addUpdate("page", page, setPage);
    servicesManager.addUpdate("service", currentCase, setCurrentCase);

    return <div className="CasesManager">
        
        <BarTitle />

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