import { useCallback, useEffect, useState } from "react";
import offerService from "../services/offerService";

export const useCarOfferForm = (submitHandler, offerId) => {
    const parseToNumberValues = ["productionYear", "mileage", "price"];
    
    const [offerPredefinedOptions, setOfferPredefinedOptions] = useState({
        brand: [],
        model: [],
        fuelType: [],
        color: [],
        region: [],
        transmissionType: [],
        vehicleType: []
    });

    const [formValues, setFormValues] = useState({
        brand: "",
        model: "",
        productionYear: 0,
        fuelType: "",
        mileage: 0,
        color: "",
        price: 0,
        region: "",
        transmissionType: "",
        vehicleType: "",
        contactInformation: "",
        description: "",
        image: ""
    });

    useEffect(() => {
        if (offerId) {
            loadOfferData(offerId);
        }

        offerService.getOfferOptions().then((options) => {
            setOfferPredefinedOptions((state) => ({ ...state, ...options }));
        }).catch((error) => {
            console.log('An error while fetching predefined options occurred', error);
        });
    }, [offerId]);

    const changeHandler = async (e) => {
        let { name, value } = e.target;

        if (parseToNumberValues.includes(name)) {
            value = Number(value);
        }

        setFormValues((state) => ({
            ...state, [name]: value
        }));

        if (name === "brand") {
            await loadModels(value);
        }
    }

    const submit = async (e) => {
        e.preventDefault();
        await submitHandler(formValues);
    };

    const loadModels = async (brand) => {
        try {
            const availableModels = await offerService.getBrandModels(brand);
            setOfferPredefinedOptions((options) => ({ ...options, model: availableModels }));
        } catch (error) {
            console.log("An error while fetching brand models occurred:", error);
        }
    };

    const loadOfferData = useCallback(async () => {
        try {
            const offerData = await offerService.getOne(offerId);
            setFormValues((values) => ({ ...values, ...offerData }));
            await loadModels(offerData.brand);
        } catch (error) {
            console.log("An error while fetching offer data occurred:", error);
        }
    }, [offerId]);

    return { offerPredefinedOptions, formValues, changeHandler, submit };
};