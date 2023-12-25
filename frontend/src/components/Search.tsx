/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faCircleXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import useDebounce from "@/hooks/useDebounce";

type AccountProps = {
    avatar: string;
    bio: string;
    created_at: string;
    facebook_url: string;
    first_name: string;
    followers_count: number;
    followings_count: number;
    full_name: string;
    id: number;
    instagram_url: string;
    last_name: string;
    likes_count: number;
    nickname: string;
    tick: boolean;
    twitter_url: string;
    updated_at: string;
    website_url: string;
    youtube_url: string;
};

const Search = () => {
    const [searchInput, setSearchInput] = useState<string>("");
    const [searchResult, setSearchResult] = useState<Array<AccountProps>>([]);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [isSearching, setIsSearching] = useState<boolean>(false);

    const debouncedValue = useDebounce(searchInput, 300);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleClear = () => {
        setSearchInput("");
        setSearchResult([]);
        inputRef.current?.focus();
    };

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchAPI = async () => {
            setIsSearching(true);

            const result = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();

            setSearchResult(result);
            setIsSearching(false);
        };

        fetchAPI();
    }, [debouncedValue]);

    return (
        <div className="flex items-center justify-center flex-1 h-full px-4 rounded-full bg-grey-100 hover:bg-grey-150">
            <div>
                <span className="pointer-events-none">
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#5f5f5f" }} />
                </span>
            </div>
            <input
                ref={inputRef}
                className="w-full h-full px-2 bg-transparent bg-opacity-0 rounded outline-none"
                type="text"
                placeholder="Tìm kiếm"
                value={searchInput}
                onChange={(e) => {
                    setSearchInput(e.target.value.trimStart());
                }}
                onFocus={() => setShowResult(true)}
            />

            {!isSearching && !!searchInput && (
                <FontAwesomeIcon icon={faCircleXmark} onClick={handleClear} style={{ color: "#5f5f5f" }} />
            )}
            {isSearching && (
                <FontAwesomeIcon icon={faCircleNotch} className="animate-spin" style={{ color: "#5f5f5f" }} />
            )}
        </div>
    );
};

export default Search;
