import React, {useCallback, useEffect, useMemo} from "react";
import {Controller, useForm} from "react-hook-form";
import {useMobileMediaQuery} from "../../utils/ResponsiveWrappers";
import {Data, MyComboBox} from "../form/MyComboBox/MyComboBox";
import {countryCodes} from "./countryCodes";
import styles from "./Stage1.module.scss";

type Stage1Fields = {
    countryCode: string,
    phoneNumber: string,
}

type Stage1Props = {
    countryCode?: string,
    phoneNumber?: string,
    handleComplete: (countryCode: string, phoneNumber: string) => void
}

const Stage1 = ({countryCode, phoneNumber, handleComplete}: Stage1Props) => {
    const isMobile = useMobileMediaQuery();

    const {register, control, handleSubmit, setValue, formState: {errors}} = useForm<Stage1Fields>();

    const transformedCountryCodes = useMemo(() => (
        countryCodes.map((code) => ({
            id: code.id,
            name: code.country,
            value: `+${code.code}`,
        } as Data))
    ), []);

    const defaultCountryCode = countryCode || transformedCountryCodes[0].value;

    const transformPhoneNumber = useCallback((phoneNumber: string) => {
        const phone = phoneNumber.replaceAll(" ", "")
                                 .replace(/\D/g, "");

        const firstPart = phone.slice(0, 2);
        const secondPart = phone.slice(2, 5);
        const thirdPart = phone.slice(5, 7);
        const fourthPart = phone.slice(7, 9);
        const fifthPart = phone.slice(9);

        const result = `${firstPart}`
            + `${secondPart ? ` ${secondPart}` : ""}`
            + `${thirdPart ? ` ${thirdPart}` : ""}`
            + `${fourthPart ? ` ${fourthPart}` : ""}`
            + `${fifthPart ? ` ${fifthPart}` : ""}`;

        setValue("phoneNumber", result);
    }, [setValue]);

    useEffect(() => {
        transformPhoneNumber(phoneNumber || "");
    }, [phoneNumber, setValue, transformPhoneNumber]);

    const handleStage1 = (data: Stage1Fields) => {
        const phone = data.phoneNumber.replaceAll(" ", "");

        handleComplete(data.countryCode, phone);
    };

    return (
        <form className={`${styles.stage1} ${isMobile ? styles.stage1Mobile : ""}`}
              onSubmit={handleSubmit(handleStage1)}>
            <fieldset className={styles.phoneSet}>
                <p className={styles.formDesc}>Enter your phone number</p>
                <div className={styles.phoneWrapper}>
                    <Controller
                        name="countryCode"
                        control={control}
                        defaultValue={defaultCountryCode}
                        render={({field}) => <MyComboBox {...field}
                                                         data={transformedCountryCodes}
                                                         className={styles.countryCode}/>}
                    />
                    <input type="tel"
                           {...register("phoneNumber", {required: true, pattern: /^\d+/})}
                           placeholder="555 555-1234"
                           onChange={e => transformPhoneNumber(e.target.value)}/>
                </div>
                {errors.phoneNumber?.type === "required" && <p className={styles.error}>Phone number is required</p>}
                {errors.phoneNumber?.type === "pattern" && <p className={styles.error}>Phone number is invalid</p>}
            </fieldset>
            <button type="submit" className={styles.submitButton}>Send code</button>
        </form>
    );
};

export default Stage1;
