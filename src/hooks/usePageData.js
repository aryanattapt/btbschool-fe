import { create } from "zustand";
import { GetConfig } from "../../services/config.service";
import { GetBTBInstagramFeed } from "../../services/instagram.service";
import { GetActiveCareerList } from "../../services/career.service";
import {
    BulletinSpotlightPayload,
    CalendarAcademicPayload,
    CareerPayload,
    ContactUsPayLoad,
    HelpPayload,
    FooterPayload
} from '../../data';
import { GetCountry } from "../../services/country.service";

const initialData = {
	isLoading: false,
    result: {},
    isError: false,
    error: {},
	language: "ID",
    footerPayload: FooterPayload
};

const LANGUAGEKEY = "LANG";
const configName = "general";

export const usePageData = create((set, get) => ({
	...initialData,

    changeLanguage: (val) => {
        try {
            set({ language: val, isLoading: true });
            localStorage.setItem(LANGUAGEKEY, val);
        } catch (error) {
            console.log(error);
        } finally{
            setTimeout(() => {
                set({ isLoading: false });
            }, 2000);
        }
    },

    getHomePageData: async() => {
        try {
            set({ isLoading: true, language: localStorage.getItem(LANGUAGEKEY) || initialData.language});
            const results = await Promise.allSettled([
                GetBTBInstagramFeed(),
                GetConfig(configName, { 
                    type: { "$in": ["homepage", "generalsetting", "homepage.carousel"] }
                }),
            ]);
        
            const igFeedData = results[0].status === 'fulfilled' ? results[0].value : [];
            const mainData = results[1].status === 'fulfilled' ? results[1].value : [];
        
            set({
                result: {
                    instagramFeed: igFeedData.length > 0 ? igFeedData.slice(0, 6) : [],
                    homepage: mainData?.find(val => val?.type === 'homepage') || {},
                    generalPayload: mainData?.find(val => val?.type === 'generalsetting') || {},
                    carousel: mainData?.filter(val => val?.type === 'homepage.carousel') || [],
                }
            });
        } catch (error) {
            console.log(error);
            set({ isError: true, error: {error} });
        } finally{
            setTimeout(() => {
                set({ isLoading: false });
            }, 1000);
        }
    },

    getAboutUsPageData: async() => {
        try {
            set({ isLoading: true, language: localStorage.getItem(LANGUAGEKEY) || initialData.language});
            const mainData = await GetConfig(configName, { 
                type: {
                    "$in" : ["generalsetting", "aboutus"]
                }
            });

            set({
                result: {
                    aboutus: mainData?.find(val => val?.type == 'aboutus') || {},
                    generalPayload: mainData?.find(val => val?.type == 'generalsetting') || {},
                }
            });
        } catch (error) {
            console.log(error);
            set({ isError: true, error: {error} });
        } finally{
            setTimeout(() => {
                set({ isLoading: false });
            }, 1000);
        }
    },

    getAlumniPageData: async() => {
        try {
            set({ isLoading: true, language: localStorage.getItem(LANGUAGEKEY) || initialData.language});
            const mainData = await GetConfig(configName, { 
                type: {
                    "$in" : ["generalsetting", "alumni", "alumni.story", "alumni.university"]
                }
            });

            set({
                result: {
                    alumni: mainData?.find(val => val?.type == 'alumni') || {},
                    alumniStory: mainData?.filter(val => val?.type == 'alumni.story') || [],
                    alumniUniversity: mainData?.filter(val => val?.type == 'alumni.university') || [],
                    generalPayload: mainData?.find(val => val?.type == 'generalsetting') || {},
                }
            });
        } catch (error) {
            console.log(error);
            set({ isError: true, error: {error} });
        } finally{
            setTimeout(() => {
                set({ isLoading: false });
            }, 1000);
        }
    },

    getBTBBelajarPageData: async() => {
        try {
            set({ isLoading: true, language: localStorage.getItem(LANGUAGEKEY) || initialData.language});
            const mainData = await GetConfig(configName, { 
                type: {
                    "$in" : ["generalsetting", "btbbelajar"]
                }
            });

            set({
                result: {
                    btbbelajar: mainData?.find(val => val?.type == 'btbbelajar') || {},
                    generalPayload: mainData?.find(val => val?.type == 'generalsetting') || {},
                }
            });
        } catch (error) {
            console.log(error);
            set({ isError: true, error: {error} });
        } finally{
            setTimeout(() => {
                set({ isLoading: false });
            }, 1000);
        }
    },

    getBTBPeduliPageData: async() => {
        try {
            set({ isLoading: true, language: localStorage.getItem(LANGUAGEKEY) || initialData.language});
            const mainData = await GetConfig(configName, { 
                type: {
                    "$in" : ["generalsetting", "btbpeduli"]
                }
            });

            set({
                result: {
                    btbpeduli: mainData?.find(val => val?.type == 'btbpeduli') || {},
                    generalPayload: mainData?.find(val => val?.type == 'generalsetting') || {},
                }
            });
        } catch (error) {
            console.log(error);
            set({ isError: true, error: {error} });
        } finally{
            setTimeout(() => {
                set({ isLoading: false });
            }, 1000);
        }
    },

    getBulletinSpotlightPageData: async() => {
        try {
            set({ isLoading: true, language: localStorage.getItem(LANGUAGEKEY) || initialData.language});
            const results = await Promise.allSettled([
                GetConfig(configName, { type: "generalsetting" }),
                GetConfig("bulletinspotlight", {})
            ]);
        
            const mainData = results[0].status === 'fulfilled' ? results[0].value : null;
            const bulletinspotlight = results[1].status === 'fulfilled' ? results[1].value : [];

            set({
                result: {
                    bulletinSpotlightPageData: BulletinSpotlightPayload || {},
                    bulletinspotlight: bulletinspotlight,
                    generalPayload: mainData?.find(val => val?.type === 'generalsetting') || {},
                }
            });
        } catch (error) {
            console.log(error);
            set({ isError: true, error: {error} });
        } finally{
            setTimeout(() => {
                set({ isLoading: false });
            }, 1000);
        }
    },

    getCalenderAcademicPageData: async() => {
        try {
            set({ isLoading: true, language: localStorage.getItem(LANGUAGEKEY) || initialData.language});
            const results = await Promise.allSettled([
                GetConfig(configName, { type: "generalsetting" }),
                GetConfig("calenderacademic", {})
            ]);
        
            const mainData = results[0].status === 'fulfilled' ? results[0].value : null;
            const calenderacademic = results[1].status === 'fulfilled' ? results[1].value : [];
        
            set({
                result: {
                    CalendarAcademicPageData: CalendarAcademicPayload || {},
                    calenderacademic: calenderacademic,
                    generalPayload: mainData?.find(val => val?.type === 'generalsetting') || {},
                }
            });
        } catch (error) {
            console.log(error);
            set({ isError: true, error: {error} });
        } finally{
            setTimeout(() => {
                set({ isLoading: false });
            }, 1000);
        }
    },

    getCareerPageData: async() => {
        try {
            set({ isLoading: true, language: localStorage.getItem(LANGUAGEKEY) || initialData.language});
            const results = await Promise.allSettled([
                GetConfig(configName, { type: "generalsetting" }),
                GetActiveCareerList()
            ]);
        
            const mainData = results[0].status === 'fulfilled' ? results[0].value : null;
            const activeCareer = results[1].status === 'fulfilled' ? results[1].value : [];

            set({
                result: {
                    activeCareer: activeCareer,
                    careerPayload: CareerPayload,
                    generalPayload: mainData?.find(val => val?.type === 'generalsetting') || {},
                }
            });        
        } catch (error) {
            console.log(error);
            set({ isError: true, error: {error} });
        } finally{
            setTimeout(() => {
                set({ isLoading: false });
            }, 1000);
        }
    },

    getContactPageData: async() => {
        try {
            set({ isLoading: true, language: localStorage.getItem(LANGUAGEKEY) || initialData.language});
            const mainData = await GetConfig(configName, { type: "generalsetting"});

            set({
                result: {
                    ContactPageData: ContactUsPayLoad || {},
                    contact: mainData?.find(val => val?.type == 'generalsetting')?.contact || {},
                    generalPayload: mainData?.find(val => val?.type == 'generalsetting') || {},
                }
            });
        } catch (error) {
            console.log(error);
            set({ isError: true, error: {error} });
        } finally{
            setTimeout(() => {
                set({ isLoading: false });
            }, 1000);
        }
    },

    getHelpPageData: async() => {
        try {
            set({ isLoading: true, language: localStorage.getItem(LANGUAGEKEY) || initialData.language});
            const results = await Promise.allSettled([
                GetConfig(configName, { type: "generalsetting" }),
                GetConfig("faq", {})
            ]);
        
            const mainData = results[0].status === 'fulfilled' ? results[0].value : [];
            const faqData = results[1].status === 'fulfilled' ? results[1].value : [];

            set({
                result: {
                    helpPayload: HelpPayload || {},
                    faq: faqData,
                    ContactusPayload: ContactUsPayLoad,
                    contact: mainData?.find(val => val?.type === 'generalsetting')?.contact || {},
                    generalPayload: mainData?.find(val => val?.type === 'generalsetting') || {},
                }
            });        
        } catch (error) {
            console.log(error);
            set({ isError: true, error: {error} });
        } finally{
            setTimeout(() => {
                set({ isLoading: false });
            }, 1000);
        }
    },

    getPendaftaranPageData: async () => {
        try {
            set({ isLoading: true, language: localStorage.getItem(LANGUAGEKEY) || initialData.language});
            const mainData = await GetConfig(configName, {
                type: {
                    "$in": ["generalsetting", "pendaftaran"]
                }
            });

            set({
                result: {
                    pendaftaranData: mainData?.find(val => val?.type == 'pendaftaran') || {},
                    generalPayload: mainData?.find(val => val?.type == 'generalsetting') || {},
                }
            });
        } catch (error) {
            console.log(error);
            set({ isError: true, error: {error} });
        } finally{
            setTimeout(() => {
                set({ isLoading: false });
            }, 1000);
        }
    },

    getOnlineRegistrationPageData: async () => {
        try {
            set({ isLoading: true, language: localStorage.getItem(LANGUAGEKEY) || initialData.language});
            const results = await Promise.allSettled([
                GetConfig(configName, { type: "generalsetting" }),
                GetCountry(),
                GetConfig('onlineregisyear', {}),
            ]);
        
            const mainData = results[0].status === 'fulfilled' ? results[0].value : [];
            const countryData = results[1].status === 'fulfilled' ? results[1].value : [];
            const yearData = results[2].status === 'fulfilled' ? results[2].value : [];

            set({
                result: {
                    countryData,
                    yearData,
                    generalPayload: mainData?.find(val => val?.type === 'generalsetting') || {},
                }
            });
        } catch (error) {
            console.log(error);
            set({ isError: true, error: {error} });
        } finally{
            setTimeout(() => {
                set({ isLoading: false });
            }, 1000);
        }
    },
}));
