import React, { useState, useEffect } from 'react'

import { getChannel, useChatContext } from "stream-chat-react";
import { SearchIcon } from "../assets";

const ChannelSearch = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const getChannel = async () => {
        try {
            // TODO:fetch channel
        } catch (error) {
            setQuery('')
        }

    }


    const onSearch = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setLoading(true);
        setQuery(value);
        getChannel(value);
    }
    return (
        <div className='channel-search__container'>
            <div className='channel-search__input__wrapper'>
                <div className='channel-search__input__icon'>
                    <SearchIcon />
                </div>
                <input
                    className='channel-search__input__text'
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={onSearch}
                />
            </div>
        </div>
    )
}

export default ChannelSearch
