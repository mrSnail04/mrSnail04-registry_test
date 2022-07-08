import React, {FormEvent, useState} from "react";
import styles from './Header.module.scss';
import Logo from "../../assert/icons/Logo.svg";
import Calendar from "../../assert/icons/Calendar.svg";
import User from "../../assert/icons/user.png";
import UpperArrow from "../../assert/icons/UpperArrow.svg";
import {CustomInput, CustomInputTypes} from "../Input/Input";
import {useNavigate} from "react-router-dom";

export const Header = () => {
    const [search, setSearch] = useState({
        textSearch:'',
    });
    const [numberNotifications, setNumberNotifications] = useState('5')

    const navigate = useNavigate();

    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    };
    const resetRequest = () => {
        setSearch({
            textSearch:''
        })
    };

    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
            console.log('#####:form ',search)
            resetRequest()
    };

    const handleClickLogo = async () => {
        navigate('/');
    };

    const handleClickProfile = async () => {
        navigate('/profile');
    };

    return (
        <div className={styles.root}>
            <div className={styles.wrap}>
                <div className={styles.logoFindWrap}>
                    <button className={styles.logo} onClick={handleClickLogo}>
                        <img  src={Logo} alt="Logo"/>
                    </button>
                    <form
                        onSubmit={handleFormSubmit}>
                        <div className={styles.inputWrap}>
                            <CustomInput
                                inputCustom={true}
                                view={CustomInputTypes.Search}
                                type={'text'}
                                name={'textSearch'}
                                placeholder={'Поиск'}
                                value={search.textSearch}
                                onChange={handleChangeValue}
                            />
                            <input className={styles.submitIcon} type="submit" value=""/>
                        </div>
                    </form>
                </div>
                <div className={styles.profile}>
                    <button className={styles.iconNotifications}>
                        <img src={Calendar} alt='Calendar'/>
                    </button>
                    <button className={styles.iconNotifications}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={numberNotifications.length > 0 ? styles.notificationsIconSVG:''} d="M26.6265 19.8133L25.8665 14.2666C25.2398 9.63994 21.6665 6.05328 17.3198 5.43994V4.01335C17.3198 3.28001 16.7198 2.68001 15.9865 2.68001C15.2532 2.68001 14.6532 3.28001 14.6532 4.01335V5.43994C10.3065 6.06661 6.75983 9.63994 6.11983 14.2666L5.35984 19.8133C5.15984 21.2533 5.58649 22.6933 6.53316 23.76C7.42649 24.7733 8.69317 25.3599 10.0265 25.3599H11.4265C11.7198 27.5866 13.6132 29.32 15.9198 29.32C18.2265 29.32 20.1198 27.5866 20.4132 25.3599H21.9198C23.2532 25.3599 24.5198 24.7733 25.4132 23.76C26.3598 22.68 26.7865 21.24 26.5865 19.8133H26.6265ZM15.9465 26.6667C15.1065 26.6667 14.4132 26.12 14.1598 25.3733H17.7332C17.4798 26.12 16.7865 26.6667 15.9465 26.6667ZM23.4398 22.0133C23.0532 22.4533 22.5198 22.7066 21.9465 22.7066H10.0398C9.4665 22.7066 8.9465 22.4667 8.5465 22.0133C8.11984 21.52 7.91983 20.84 8.01316 20.1733L8.77317 14.6266C9.27984 10.8533 12.3865 8 15.9998 8C19.6132 8 22.7065 10.8533 23.2265 14.6266L23.9865 20.1733C24.0798 20.84 23.8798 21.52 23.4532 22.0133H23.4398Z" fill="#676A71"/>
                        </svg>
                        {numberNotifications.length > 0 ?
                            <p className={styles.numberNotifications}>
                                {numberNotifications}
                            </p>
                        : null}
                    </button>
                    <div className={styles.line}/>
                    <button className={styles.userButton} onClick={handleClickProfile}>
                        <img src={User} alt='Photo User'/>
                        <p className={styles.userName}>Захар Палазник</p>
                    </button>
                    <button className={styles.userButton}>
                        <img src={UpperArrow} alt='Upper Arrow'/>
                    </button>
                </div>
            </div>

        </div>
    )
};