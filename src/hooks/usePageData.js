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
            const [igFeedData, mainData ] = await Promise.all([
                GetBTBInstagramFeed(),
                GetConfig(configName, { 
                    type: {
                        "$in" : ["homepage", "generalsetting", "homepage.carousel"]
                    } 
                }),
            ]);

            set({
                result: {
                    instagramFeed: igFeedData.length > 0 && igFeedData.slice(0, 6),
                    homepage: mainData?.find(val => val?.type == 'homepage') || {},
                    generalPayload: mainData?.find(val => val?.type == 'generalsetting') || {},
                    carousel: mainData?.filter(val => val?.type == 'homepage.carousel') || [],
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
            const [mainData, bulletinspotlight] = await Promise.all([
                GetConfig(configName, { type: "generalsetting" }),
                GetConfig("bulletinspotlight", {})
            ]);

            set({
                result: {
                    bulletinSpotlightPageData: BulletinSpotlightPayload || {},
                    bulletinspotlight: bulletinspotlight || [],
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

    getCalenderAcademicPageData: async() => {
        try {
            set({ isLoading: true, language: localStorage.getItem(LANGUAGEKEY) || initialData.language});
            const [mainData, calenderacademic] = await Promise.all([
                GetConfig(configName, { type: "generalsetting" }),
                GetConfig("calenderacademic", {})
            ]);

            set({
                result: {
                    CalendarAcademicPageData: CalendarAcademicPayload || {},
                    calenderacademic: calenderacademic || [],
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

    getCareerPageData: async() => {
        try {
            set({ isLoading: true, language: localStorage.getItem(LANGUAGEKEY) || initialData.language});
            const [mainData, activeCareer] = await Promise.all([
                GetConfig(configName, { type: "generalsetting" }),
                GetActiveCareerList()
            ]);

            set({
                result: {
                    activeCareer: activeCareer || [],
                    careerPayload: CareerPayload,
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
            const [mainData, faqData] = await Promise.all([
                GetConfig(configName, { type: "generalsetting" }),
                GetConfig("faq", {})
            ]);

            set({
                result: {
                    helpPaylod: HelpPayload || {},
                    faq: faqData || [],
                    ContactUsPayLoad: ContactUsPayLoad,
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

    getPendaftaranPageData: async () => {
        try {
            set({ isLoading: true, language: localStorage.getItem(LANGUAGEKEY) || initialData.language});
            const mainData = await GetConfig(configName, {
                type: {
                    "$in": ["generalsetting", "pendaftaran"]
                }
            })

            console.log(mainData?.find(val => val?.type == 'generalsetting'));

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
}));
