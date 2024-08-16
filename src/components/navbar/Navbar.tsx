"use client";
import { useState } from "react";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import Logo from "../Logo";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import { BsList, BsX } from "react-icons/bs";
import Container from "../Container";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full fixed bg-[#e5e5ee]  z-50">
      <Container>
        <nav className="flex justify-between  m-auto py-3">
          {/* Desktop menu */}
          <div className="flex w-full justify-between">
            <div className="flex  items-center gap-8">
              <Link href="/" className="ml-8">
                <Logo />
              </Link>
              <div className="hidden xl:block">
                <ul className="flex gap-5 text-[22px]">
                  <li>
                    <Link
                      href="/"
                      className="cursor-pointer pl-[10px] hover:text-third "
                    >
                      الرئيسية{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/about"
                      className="cursor-pointer hover:text-third"
                    >
                      من نحن{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="cursor-pointer   focus:text-third flex flex-col items-center gap-1"
                    >
                      <Menu as="div" className="relative ">
                        <Menu.Button className="flex  items-center gap-1">
                          منتجاتنا <MdKeyboardArrowDown />
                        </Menu.Button>

                        <Menu.Items className="flex flex-col xl:px-[15px] leading-10 text-[12px] xl:text-[16px] xl:text-start   text-center xl:fixed  xl:w-[250px] xlpy-[30px] xl:mt-[35px]  bg-primary rounded-md">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                className={`${
                                  active && "bg-[#1f1a36]"
                                } hover:text-third`}
                                href="/our-products/single-ladder"
                              >
                                سلم الومنيوم مفرد{" "}
                              </Link>
                            )}
                          </Menu.Item>
                          <span className="w-[120px] xl:w-[215px] h-[1px] my-2 bg-slate-400 m-auto xl:m-0"></span>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                className={`${
                                  active && "bg-[#1f1a36]"
                                } hover:text-third`}
                                href="/our-products/double-ladder"
                              >
                                سلم الومنيوم مزدوج{" "}
                              </Link>
                            )}
                          </Menu.Item>

                          <span className="w-[120px] xl:w-[215px] h-[1px] my-2 bg-slate-400  xl:m-0"></span>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                className={`${
                                  active && "bg-[#1f1a36]"
                                } hover:text-third`}
                                href="/our-products/scaffold"
                              >
                                سقالات الومنيوم{" "}
                              </Link>
                            )}
                          </Menu.Item>
                          <span className="w-[120px] xl:w-[215px] h-[1px] my-2 bg-slate-400  xl:m-0"></span>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                className={`${
                                  active && "bg-[#1f1a36]"
                                } hover:text-third`}
                                href="/our-products/ladder-towers"
                              >
                                سلالم الومنيوم ابراج{" "}
                              </Link>
                            )}
                          </Menu.Item>
                          <span className="w-[120px] xl:w-[215px] h-[1px] my-2 bg-slate-400  xl:m-0"></span>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                className={`${
                                  active && "bg-[#1f1a36]"
                                } hover:text-third`}
                                href="/our-products/aluminum-pallet"
                              >
                                باليتات الومنيوم
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/contact-us"
                      className="cursor-pointer hover:text-third"
                    >
                      اتصل بنا
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden xl:block items-center justify-end">
              <button className="bg-bgbtn text-[16px] hover:bg-hoverbtn my-5 text-white pl-5 border-[1px] border-bgbtn text-center items-center px-4 h-[30px] rounded-md py-[1px] ">كتالوج</button>
            </div>
          </div>
          {/* Mobile menu */}
          <div className="xl:hidden cursor-pointer justify-end flex w-[250px] gap-2 items-center py-4  ">
            <div onClick={toggleMenu} className="cursor-pointer">
              <BsList className="h-8 w-8 " />
            </div>
          </div>
          <div
            className={
              menuOpen
                ? "fixed z-10  top-20 right-0 w-[75%] h-screen  bg-[#e5e5ee] p-10 ease-in-out duration-500"
                : "fixed h-screen right-[-100%] top-22 p-10 ease-in-out duration-500"
            }
          >
            <div className="w-full relative  items-center mb-[70px] justify-end">
              <div
                onClick={toggleMenu}
                className="cursor-pointer absolute left-0"
              >
                <BsX className="h-8 w-8    " />
              </div>
            </div>
            {/* Mobile menu links */}

            <div className="flex-col">
              <ul className="text-[18px] ">
                <li>
                  <Link
                    href="/categories"
                    className="cursor-pointer text-[18px] pb-[10px] pl-[10px] hover:text-third "
                  >
                    الرئيسية{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/electronic-training"
                    className="cursor-pointer text-[18px] pb-[10px] hover:text-third"
                  >
                    من نحن{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="cursor-pointer text-[18px]  focus:text-third flex flex-col items-start gap-1"
                  >
                    <Menu as="div" className="relative ">
                      <Menu.Button className="flex  items-start gap-1">
                        منتجاتنا <MdKeyboardArrowDown />
                      </Menu.Button>

                      <Menu.Items className="flex flex-col  leading-10 text-[14px]  text-start      rounded-md">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              className={`${
                                active && "bg-[#1f1a36]"
                              } hover:text-third`}
                              href="/our-products/single-ladder"
                            >
                              سلم الومنيوم مفرد{" "}
                            </Link>
                          )}
                        </Menu.Item>
                        <span className="w-[120px]  h-[1px] my-2 bg-slate-400  xl:m-0"></span>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              className={`${
                                active && "bg-[#1f1a36]"
                              } hover:text-third`}
                              href="/our-products/double-ladder"
                            >
                              سلم الومنيوم مزدوج{" "}
                            </Link>
                          )}
                        </Menu.Item>

                        <span className="w-[120px] xl:w-[215px] h-[1px] my-2 bg-slate-400  xl:m-0"></span>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              className={`${
                                active && "bg-[#1f1a36]"
                              } hover:text-third`}
                              href="/our-products/scaffold"
                            >
                              سقالات الومنيوم{" "}
                            </Link>
                          )}
                        </Menu.Item>
                        <span className="w-[120px] xl:w-[215px] h-[1px] my-2 bg-slate-400  xl:m-0"></span>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              className={`${
                                active && "bg-[#1f1a36]"
                              } hover:text-third`}
                              href="/our-products/ladder-towers"
                            >
                              سلالم الومنيوم ابراج{" "}
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="cursor-pointer pb-[10px] hover:text-third"
                  >
                    اتصل بنا
                  </Link>
                </li>
              </ul>
              <div>
              <button className="bg-bgbtn text-[16px] hover:bg-hoverbtn my-5 text-white pl-5 border-[1px] border-bgbtn text-center items-center w-full h-[30px] rounded-md py-[1px] ">كتالوج</button>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
