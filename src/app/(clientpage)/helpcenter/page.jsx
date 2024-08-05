'use client'
import { useState } from 'react';
import { Accordion, Button, Tabs } from 'flowbite-react';

const HelpCenterPage = () => {

    return <>
        <div className="relative md:h-[475px]">
            <img
            src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/banneraboutus.jpg"
            alt="banneraboutus"
            className="md:h-full md:w-full object-cover"
            />
        </div>

        <div className="max-w-7xl mx-auto p-4">
            <Tabs aria-label="Tabs with underline" variant="underline">
                <Tabs.Item title="F.A.Q">
                    <div className="p-4 rounded-lg shadow-md">
                        <h1 className="text-2xl font-bold text-[#00305E] text-center mb-6">
                            Soal yang sering ditanyakan
                        </h1>
                        <Accordion>
                            <Accordion.Panel>
                                <Accordion.Title>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400 text-[#00305E]">test</p>
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400 text-[#00305E]">
                                        Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                                        dropdowns, modals, navbars, and more.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Informasi Pendaftaran">
                    <div className="p-4">
                        <h1 className="text-2xl font-bold text-[#00305E] text-center mb-6">
                            Informasi Pendaftaran
                        </h1>
                        <div className="bg-white p-6 mb-4">
                            <h2 className="text-xl font-bold mb-4 text-[#00305E]">Temukan Informasi</h2>
                            <p className="mb-4 text-[#00305E]">Memiliki pertanyaan mengenai kehidupan di sekolah BTB, bagaimana kegiatan belajar mengajar dan aktivitas di lingkungan BTB?</p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <a href="mailto:admission@btbschool.org" className="block bg-blue-600 text-white py-2 px-4 rounded-lg text-center">ADMISSION@BTBSCHOOL.ORG</a>
                                <a href="tel:0216698888" className="block bg-blue-600 text-white py-2 px-4 rounded-lg text-center">0216698888</a>
                            </div>
                        </div>
                        <div className="bg-white p-6 mb-4">
                            <h2 className="text-xl font-bold mb-4 text-[#00305E]">Alur Pendaftaran</h2>
                            <div className="relative">
                                <img
                                    src="https://w6i8.c1.e2-7.dev/assets/btbschool/images/banneraboutus.jpg"
                                    alt="banneraboutus"
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button onClick={() => {window.location.href='/onlineregistration'}}>
                                Click here to Register
                            </Button>
                        </div>
                    </div>
                </Tabs.Item>
            </Tabs>
        </div>
    </>
}

export default HelpCenterPage;