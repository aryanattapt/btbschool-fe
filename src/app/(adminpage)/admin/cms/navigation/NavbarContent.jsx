import React from "react";
import CMSSubtitle from "../_components/CMSSubtitle";
import CMSDivider from "../_components/CMSDivider";
import { useNavigationStore } from "../../../../../../store/admin/cms/navigationStore";
import FieldTitle from "../_components/FieldTitle";
import { Table, TextInput } from "flowbite-react";

const NavbarContent = ({ navItems }) => {
  const setParentContent = useNavigationStore(
    (state) => state.setParentContent
  );
  const setNavbarSubmenuContent = useNavigationStore(
    (state) => state.setNavbarSubmenuContent
  );

  const submenuBelajar = [
    "PAUD - TK",
    "Sekolah Dasar",
    "Sekolah Menengah Pertama",
    "Sekolah Menengah Atas",
  ];

  const submenuDuniaBtb = ["Buletin Sekolah", "Kalender Akademis", "Bantuan"];

  const submenuAboutUs = ["Pengenalan", "Visi Misi", "Jenjang Pendidikan"];
  
  const submenuAlumni = ["Cerita Alumni", "Pendaftaran Alumni"];

  const submenuPendaftaran = ["Enrolment", "Beasiswa", "Tur Sekolah", "Pendaftaran Online"];

  const submenuContactUs = ["Hubungi Kami", "Lokasi Kami"];

  const submenuBTBCare = ["BTB Peduli Lingkungan", "Sukarelawan BTB", "BTB Tangan Penolong"];

  return (
    <div>
      <CMSSubtitle>Navigation Bar</CMSSubtitle>
      <FieldTitle>Belajar di BTB</FieldTitle>
      <TextInput
        value={navItems[0]["content"]}
        onChange={(e) => {
          setParentContent(e.target.value, 0);
        }}
      />
      <FieldTitle>Submenu</FieldTitle>
      <TableSubMenu
        menus={submenuBelajar}
        navItems={navItems}
        onChange={setNavbarSubmenuContent}
        index={0}
      />
      <CMSDivider />

      <FieldTitle>Dunia BTB</FieldTitle>
      <TextInput
        value={navItems[1]["content"]}
        onChange={(e) => {
          setParentContent(e.target.value, 1);
        }}
      />
      <FieldTitle>Submenu</FieldTitle>
      <TableSubMenu
        menus={submenuDuniaBtb}
        navItems={navItems}
        onChange={setNavbarSubmenuContent}
        index={1}
      />
      <CMSDivider />

      <FieldTitle>Tentang Kami</FieldTitle>
      <TextInput
        value={navItems[2]["content"]}
        onChange={(e) => {
          setParentContent(e.target.value, 2);
        }}
      />
      <FieldTitle>Submenu</FieldTitle>
      <TableSubMenu
        menus={submenuAboutUs}
        navItems={navItems}
        onChange={setNavbarSubmenuContent}
        index={2}
      />
      <CMSDivider />

      <FieldTitle>BTB Knight United</FieldTitle>
      <TextInput
        value={navItems[3]["content"]}
        onChange={(e) => {
          setParentContent(e.target.value, 3);
        }}
      />
      <CMSDivider />

      <FieldTitle>BTB Cares</FieldTitle>
      <TextInput
        value={navItems[4]["content"]}
        onChange={(e) => {
          setParentContent(e.target.value, 4);
        }}
      />
      <FieldTitle>Submenu</FieldTitle>
      <TableSubMenu
        menus={submenuBTBCare}
        navItems={navItems}
        onChange={setNavbarSubmenuContent}
        index={4}
      />
      <CMSDivider />

      <FieldTitle>Alumni</FieldTitle>
      <TextInput
        value={navItems[5]["content"]}
        onChange={(e) => {
          setParentContent(e.target.value, 5);
        }}
      />
      <FieldTitle>Submenu</FieldTitle>
      <TableSubMenu
        menus={submenuAlumni}
        navItems={navItems}
        onChange={setNavbarSubmenuContent}
        index={5}
      />
      <CMSDivider />

      <FieldTitle>Pendaftaran</FieldTitle>
      <TextInput
        value={navItems[6]["content"]}
        onChange={(e) => {
          setParentContent(e.target.value, 6);
        }}
      />
      <FieldTitle>Submenu</FieldTitle>
      <TableSubMenu
        menus={submenuPendaftaran}
        navItems={navItems}
        onChange={setNavbarSubmenuContent}
        index={6}
      />
      <CMSDivider />

      <FieldTitle>Karir</FieldTitle>
      <TextInput
        value={navItems[7]["content"]}
        onChange={(e) => {
          setParentContent(e.target.value, 7);
        }}
      />
      <CMSDivider />
      
      <FieldTitle>Kontak</FieldTitle>
      <TextInput
        value={navItems[8]["content"]}
        onChange={(e) => {
          setParentContent(e.target.value, 8);
        }}
      />
      <FieldTitle>Submenu</FieldTitle>
      <TableSubMenu
        menus={submenuContactUs}
        navItems={navItems}
        onChange={setNavbarSubmenuContent}
        index={8}
      />
      <CMSDivider />
    </div>
  );
};

const TableSubMenu = ({ menus, navItems, index, onChange }) => {
  const submenu = navItems[index]?.submenu || [];

  return (
    <Table>
      <Table.Head>
        <Table.HeadCell className="w-[50%]">Label</Table.HeadCell>
        <Table.HeadCell className="w-[50%]">Value</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {menus.map((res, idx) => {
          const content = submenu[idx]?.content || "";

          return (
            <Table.Row
              key={idx}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="py-2">{res}</Table.Cell>
              <Table.Cell className="py-2">
                <input
                  onChange={(e) => {
                    onChange(e.target.value, index, idx);
                  }}
                  value={content}
                  className="border-b-[1px] border-gray-300 text-black"
                />
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export { NavbarContent };
