var tabledata = [
{name: "3DSX Loader", 
 url: "https://github.com/0xEBFE/3DSX-IDA-PRO-Loader",
 cats: "loader",
 src: "py",
 desc: "IDA PRO Loader for 3DSX files"},

{name: "abyss", 
 url: "https://github.com/patois/abyss",
 cats: "decomp",
 src: "py",
 desc: "Postprocess Hexrays Decompiler Output"},

{name: "ActionScript 3", 
 url: "https://github.com/KasperskyLab/ActionScript3",
 cats: "loader, proc, debug",
 src: "py",
 vers: "7.1",
 desc: "An ActionScript 3 processor module and Flash debugger plugin."},

{name: "Adobe Flash disassembler", 
 url: "https://hex-rays.com/contests/2009/SWF/ReadMe.txt",
 cats: "loader, proc",
 src: "c++",
 desc: "The 2 plugins present in this archive will enable IDA to parse SWF files, load all SWF tags as segments for fast search and retrieval, parse all tags that can potentially contain ActionScript2 code, discover all such code(a dedicated processor module has been written for it) and even name the event functions acording to event handled in it (eg. OnInitialize). [Download](https://hex-rays.com/contests/2009/SWF/swf.zip)"},

{name: "alleycat", 
 url: "https://github.com/devttys0/ida/tree/master/plugins/alleycat",
 src: "py",
 desc: "*  Finds paths to a given code block inside a function\n*  Finds paths between two or more functions\n*  Generates interactive call graphs\n*  Fully scriptable"},

{name: "Amnesia", 
 url: "https://github.com/duo-labs/idapython",
 src: "py",
 desc: "Amnesia is an IDAPython module designed to use byte level heuristics to find ARM thumb instructions in undefined bytes in an IDA Pro database. Currently, the heuristics in this module find code in a few different ways. Some instructions identify and define new code by looking for comon byte sequences that correspond to particular ARM opcodes. Other functions in this module define new functions based on sequences of defined instructions."},

{name: "Android Debugging", 
 url: "https://github.com/techbliss/ADB_Helper_QT_Super_version",
 src: "py",
 desc: "This version have both support for native arm debugging via usb and sdk ADV manager."},

{name: "Android Scripts Collection", 
 url: "https://github.com/strazzere/android-scripts",
 src: "py",
 desc: "Collection of Android reverse engineering scripts that make my life easier"},

{name: "APIScout", 
 url: "https://github.com/danielplohmann/apiscout",
 src: "py",
 desc: "This project aims at simplifying Windows API import recovery. As input, arbitrary memory dumps for a known environment can be processed (please note: a reference DB has to be built first, using apiscout/db_builder). The output is an ordered list of identified Windows API references with some meta information, and an ApiVector fingerprint. Includes a convenience GUI wrapper for use in IDA."},

{name: "AutoRE", 
 url: "https://github.com/a1ext/auto_re",
 src: "py",
 desc: "Auto-renaming plugin with tagging support."},

{name: "BinAuthor", 
 url: "https://github.com/g4hsean/BinAuthor",
 src: "py",
 desc: "Match an author to an unknown binary."},

{name: "BinCAT", 
 url: "https://github.com/airbus-seclab/bincat",
 src: "py",
 vers: "7.4",
 desc: "BinCAT is a static Binary Code Analysis Toolkit, designed to help reverse engineers, directly from IDA."},

{name: "BinClone", 
 url: "https://github.com/BinSigma/BinClone",
 src: "c++",
 desc: "BinClone: detecting code clones in malware [SERE 2014]"},

{name: "BinNavi", 
 url: "https://github.com/google/binnavi",
 desc: "BinNavi is a binary analysis IDE - an environment that allows users to inspect, navigate, edit, and annotate control-flow-graphs of disassembled code, do the same for the callgraph of the executable, collect and combine execution traces, and generally keep track of analysis results among a group of analysts."},

{name: "Bin Sourcerer", 
 url: "https://github.com/BinSigma/BinSourcerer",
 src: "py",
 desc: "BinSourcerer (a.k.a RE-Source Online) is an assembly to source code matching framework for binary auditing and malware analysis."},

{name: "Bootroom Analysis Library", 
 url: "https://github.com/digitalbond/IBAL",
 src: "py",
 desc: "IBAL is the IDA Pro Bootrom Analysis Library, which contains a number of useful functions for analyzing embedded ROMs."},

{name: "Bosch ME7", 
 url: "https://github.com/AndyWhittaker/IDAProBoschMe7x",
 src: "c++",
 desc: "Siemens Bosch ME7.x Disassembler Helper for IDA Pro"},

{name: "CGEN", 
 url: "https://github.com/yifanlu/cgen",
 src: "scm",
 desc: "CGEN with support for generating IDA Pro IDP modules."},

{name: "Class Informer", 
 url: "http://sourceforge.net/projects/classinformer/",
 src: "c++",
 desc: "Scans an MSVC 32bit target IDB for vftables with C++ RTTI, and MFC RTCI type data. Places structure defs, names, labels, and comments to make more sense of class vftables (\"Virtual Function Table\") and make them read easier as an aid to reverse engineering. Creates a list window with found vftables for browsing."},

{name: "Classy", 
 url: "https://github.com/RicBent/Classy",
 src: "py",
 desc: " Helps users easily manage classes in IDA Pro. Vtables can be generated by selecting a range, functions can be assigned to classes, their signatures can be easily editing and mangled, IDA structs can be assigned, C headers can be generated, probably more."},

{name: "codatify", 
 url: "https://github.com/devttys0/ida/tree/master/plugins/codatify",
 src: "py",
 desc: "  \n* Defines ASCII strings that IDA's auto analysis missed\n*  Defines functions/code that IDA's auto analysis missed\n*  Converts all undefined bytes in the data segment into DWORDs (thus allowing IDA to resolve function and jump table pointers)"},

{name: "c0demap", 
 url: "https://github.com/c0demap/codemap",
 src: "py",
 vers: "6.6",
 desc: "Codemap is a binary analysis tool for \"run-trace visualization\" provided as IDA plugin."},

{name: "collabREate", 
 url: "http://www.idabook.com/collabreate/",
 desc: "collabREate is a plugin for IDA Pro that is designed to provide a collaborative reverse engineering capability for multiple IDA users working on the same binary file."},

{name: "Comida", 
 url: "https://github.com/airbus-cert/comida",
 src: "py",
 cats: "decomp",
 desc: "Comida is a plugin which searches all the references of the GUID COM object (Common Object Model) and deduce the associated type using the Hexrays plugin to improve the readability of the code."},

{name: "Cortex M Firmware", 
 url: "https://github.com/duo-labs/idapython",
 src: "py",
 desc: "The Cortex M Firmware module grooms an IDA Pro database containing firmware from an ARM Cortex M microcontroller. This module will annotate the firmware vector table, which contains a number of function pointers. This vector table annotation will cause IDA Pro to perform auto analysis against the functions these pointers point to. "},

{name: "Crowd Detox", 
 url: "https://github.com/CrowdStrike/CrowdDetox",
 src: "c++",
 cats: "decomp",
 desc: "The CrowdDetox plugin for Hex-Rays automatically removes junk code and variables from Hex-Rays function decompilations."},

{name: "Dalvik Header", 
 url: "https://github.com/strazzere/dalvik-header-plugin",
 src: "c++",
 cats: "decomp",
 desc: "This is a simple Dalvik header plugin for IDA Pro"},

{name: "Data Xref Counter", 
 url: "https://github.com/onethawt/idapyscripts",
 src: "py",
 desc: "Enumerates all of the the x-references in a specific segment and counts the frequency of usage. The plugin displays the data in QtTableWidget and lets the user filter and sort the references. You can also export the data to a CSV file."},

{name: "Debugger", 
 url: "https://github.com/cseagle/sk3wldbg",
 src: "c++",
 cats: "debug",
 vers: "6.6",
 desc: "Debugger plugin for IDA Pro backed by the Unicorn Engine"},

{name: "deREferencing", 
 url: "https://github.com/danigargu/deREferencing",
 src: "py",
 cats: "debug",
 vers: "7.1",
 desc: "IDA Pro plugin that implements more user-friendly register and stack views."},

{name: "Diaphora", 
 url: "https://github.com/joxeankoret/diaphora",
 src: "py",
 vers: "7.4",
 desc: "Diaphora (διαφορά, Greek for 'difference') is a program diffing plugin for IDA Pro, similar to Zynamics Bindiff or the FOSS counterparts DarunGrim, TurboDiff, etc... It was released during SyScan 2015."},

{name: "Docker IDA", 
 url: "https://github.com/intezer/docker-ida",
 src: "py",
 vers: "6.9",
 desc: "Run IDA Pro disassembler in Docker containers for automating, scaling and distributing the use of IDAPython scripts."},

{name: "DOXBox Debugger", 
 url: "https://github.com/wjp/idados",
 src: "c++",
 cats: "debug",
 vers: "6.9",
 desc: "Eric Fry's IDA/DOSBox debugger plugin"},

{name: "DrGadget", 
 url: "https://github.com/patois/DrGadget",
 desc: "This is an IDAPython plugin for the Interactive Disassembler for all your ROP experimentation needs."},

{name: "DriverBuddy", 
 url: "https://github.com/nccgroup/DriverBuddy",
 desc: "DriverBuddy is an IDA Python script to assist with the reverse engineering of Windows kernel drivers."},

{name: "Drop", 
 url: "https://github.com/Riscure/DROP-IDA-plugin",
 desc: "An experimental IDA Pro plugin capable of detecting several types of opaque predicates in obfuscated binaries. It leverages the power of the symbolic execution engine angr and its components to reason about the opaqueness of predicates based on their symbolic context."},

{name: "dsync", 
 url: "https://github.com/patois/dsync",
 desc: "IDAPython plugin that synchronizes decompiled and disassembled code views."},

{name: "dwarfexport", 
 url: "https://github.com/ALSchwalm/dwarfexport",
 desc: "dwarfexport is an IDA Pro plugin that allows the user to export dwarf debug information. This can then be imported in to gdb and other tools, allowing you to debug using info you have recovered in IDA even when you cannot connect the IDA debugger."},

{name: "DWARF Plugin", 
 url: "https://hex-rays.com/contests/2009/IDADwarf-0.2/README",
 desc: "IDADWARF is an IDA plugin that imports DWARF debugging symbols into an IDA database. [Download](https://hex-rays.com/contests/2009/IDADwarf-0.2/idadwarf-0.2.zip)"},

{name: "Dynamic Data Resolver", 
 url: "https://github.com/Cisco-Talos/DynDataResolver",
 desc: " A plugin for IDA that aims to make the reverse-engineering of malware easier. Features: Code Flow Trace, Searchable API call logging, Searchable string logging, Resolving dynamic values and auto-commenting."},

{name: "Dynamic IDA Enrichment", 
 url: "https://github.com/ynvb/DIE",
 desc: "DIE is an IDA python plugin designed to enrich IDA`s static analysis with dynamic data. This is done using the IDA Debugger API, by placing breakpoints in key locations and saving the current system context once those breakpoints are hit."},

{name: "EFI Scripts", 
 url: "https://github.com/danse-macabre/ida-efitools",
 desc: "Some IDA scripts and tools to assist with reverse engineering EFI executables."},

{name: "efiXplorer", 
 url: "https://github.com/binarly-io/efiXplorer",
 desc: "IDA plugin for UEFI firmware analysis and reverse engineering automation."},

{name: "EtherAnnotate", 
 url: "https://github.com/inositle/etherannotate_ida",
 desc: "Parses the specialized instruction trace files that are generated using the EtherAnnotate Xen modification (http://github.com/inositle/etherannotate_xen).  From the instruction trace, register values and code coverage of the run-time information are visualized in IDA Pro through instruction comments and line colorations."},

{name: "Extract Macho-O", 
 url: "https://github.com/gdbinit/ExtractMachO",
 desc: "This is a very simple IDA plugin to extract all Mach-O binaries contained anywhere in the disassembly."},

{name: "FCatalog", 
 url: "http://www.xorpd.net/pages/fcatalog.html",
 desc: "FCatalog (The functions catalog) is a mechanism for finding similarities between different binary blobs in an efficient manner. It is mostly useful for identifying a new binary blob is somewhat similar to a binary blob that have been encountered before. The client side of FCatalog is an IDA plugin that allows a group of reverse engineers to manage a pool of reversed functions. Whenever a new binary function is encountered, FCatalog can compare it to all the known and previously reversed binary functions."},

{name: "Findcrypt", 
 url: "https://github.com/polymorf/findcrypt-yara",
 desc: "IDA pro plugin to find crypto constants (and more)"},

{name: "FIRST", 
 url: "https://github.com/vrtadmin/FIRST-plugin-ida/tree/dev",
 desc: "Function Identification and Recovery Signature Tool (FIRST) is a plugin for IDA Pro that allows users to automatically search for and apply function metadata (the function name, parameter names, parameter types, comments, etc.) submitted from different IDBs / users. This functionality is similar to IDA's Lumina feature, which was introduced in IDA 7.2, although with FIRST the function metadata server address is configurable and the FIRST server code is open source, which means the user can set up a private metadata server for internal use if desired. A community database is also maintained by Cisco Talos and available to use free-of-charge. FIRST supports IDA 6.9 SP1 and above."},

{name: "flare-emu", 
 url: "https://github.com/fireeye/flare-emu",
 desc: "flare-emu marries a supported binary analysis framework, such as IDA Pro or Radare2, with Unicorn’s emulation framework to provide the user with an easy to use and flexible interface for scripting emulation tasks. It is designed to handle all the housekeeping of setting up a flexible and robust emulator for its supported architectures so that you can focus on solving your code analysis problems. Currently, flare-emu supports the x86, x86_64, ARM, and ARM64 architectures."},

{name: "FLARE IDA Decompiler Library (FIDL)", 
 url: "https://github.com/fireeye/FIDL",
 desc: "A sane API for IDA Pro's decompiler."},

{name: "FLARE Plugins", 
 url: "https://github.com/fireeye/flare-ida",
 desc: "Shellcode Hashes, Struct Typer, StackStrings, MSDN Annotations, ApplyCalleType"},

{name: "FLS Loader", 
 url: "https://github.com/rpw/flsloader",
 desc: "IDA Pro loader module for IFX iPhone baseband firmwares. Based on a universal scatter loader script by roxfan."},

{name: "Fluorescence", 
 url: "https://github.com/devttys0/ida/tree/master/plugins/fluorescence",
 desc: "Un/highlights function call instructions"},

{name: "Free the debuggers", 
 url: "https://github.com/techbliss/Free_the_Debuggers",
 desc: "Free the ida pro debuggers for all files."},

{name: "Frida", 
 url: "https://github.com/techbliss/Frida_For_Ida_Pro",
 desc: "This is plugin for ida pro thar uses the Frida api. Mainly trace functions."},

{name: "FRAPL", 
 url: "https://github.com/FriedAppleTeam/FRAPL",
 desc: "FRAPL is a reverse engineering framework created to simplify dynamic instrumentation with Frida."},

{name: "FRIEND", 
 url: "https://github.com/alexhude/FRIEND",
 desc: "Flexible Register/Instruction Extender aNd Documentation. FRIEND is an IDA plugin created to improve disassembly and bring register/instruction documentation right into IDA View."},

{name: "Funcap", 
 url: "https://github.com/deresz/funcap",
 desc: "This script records function calls (and returns) across an executable using IDA debugger API, along with all the arguments passed. It dumps the info to a text file, and also inserts it into IDA's inline comments. This way, static analysis that usually follows the behavioral runtime analysis when analyzing malware, can be directly fed with runtime info such as decrypted strings returned in function's arguments."},

{name: "Functions+", 
 url: "https://github.com/nihilus/functions-plus",
 desc: "IDA Pro plugin to make functions tree view. Plugin parses function names and groups them by namespaces."},

{name: "Function Tagger", 
 url: "https://github.com/alessandrogario/IDA-Function-Tagger",
 desc: "This IDAPython script tags subroutines according to their use of imported functions"},

{name: "Gamecube Extension", 
 url: "https://github.com/hyperiris/gekkoPS",
 desc: "This is a Gekko CPU Paired Single extension instructions plug-in for IDA Pro 5.2"},

{name: "Gamecube DSP", 
 url: "https://github.com/dolphin-emu/gcdsp-ida",
 desc: "This project adds support for the DSP present in the Gamecube and the Wii to IDA, the Interactive Disassembler [1]. This allows easy analyze of a DSP ucode, handling cross-references, control flow, and so on."},

{name: "gdbida", 
 url: "https://github.com/comsecuris/gdbida",
 desc: "A visual bridge between a GDB session and IDA Pro's disassembler"},

{name: "genmc", 
 url: "https://github.com/patois/genmc",
 desc: "Genmc is an IDAPython script/plugin hybrid that displays Hexrays decompiler microcode, which can help in developing microcode plugins."},

{name: "Gensida", 
 url: "https://github.com/lab313ru/Gensida",
 desc: "IDA debugger plugin for Sega Genesis / Megadrive ROMs based on Gens ReRecordings emulator modifications."},

{name: "Geolocator", 
 url: "https://github.com/techbliss/ida_pro_http_ip_geolocator",
 desc: "Lookup IP's and http/https adresses, using google maps, and MaxMind databases."},

{name: "GhIDA", 
 url: "https://github.com/Cisco-Talos/GhIDA",
 desc: "GhIDA is an IDA Pro plugin that integrates the Ghidra decompiler in IDA."},

{name: "golang_loader_assist", 
 url: "https://github.com/strazzere/golang_loader_assist",
 desc: "Making GO reversing easier in IDA Pro"},

{name: "Graph Slick", 
 url: "https://github.com/lallousx86/GraphSlick",
 desc: "Automated detection of inlined functions. It highlights similar groups of nodes and allows you to group them, simplifying complex functions. The authors provide an accompanying presentation which explains the algorithms behind the plugin and shows sample use cases."},

{name: "HeapViewer", 
 url: "https://github.com/danigargu/heap-viewer",
 desc: "An IDA Pro plugin to examine the heap, focused on exploit development."},

{name: "HexRays CodeXplorer", 
 url: "https://github.com/REhints/HexRaysCodeXplorer",
 desc: "The Hex-Rays Decompiler plugin for better code navigation in RE process. CodeXplorer automates code REconstruction of C++ applications or modern malware like Stuxnet, Flame, Equation, Animal Farm ..."},

{name: "HexRaysDeob", 
 url: "https://www.hex-rays.com/contests/2018/index.shtml",
 desc: "A Hex-Rays microcode API plugin breaking an obfuscating compiler used to create an in-the-wild malware family. The plugin is fully automatic and requires no user intervention; upon installation, the decompilation listings presented to the user will be free of obfuscation."},

{name: "Hexrays Toolbox", 
 url: "https://github.com/patois/HexraysToolbox",
 desc: "Find code patterns within the Hexrays AST"},

{name: "HexRays Tools", 
 url: "https://github.com/nihilus/hexrays_tools",
 desc: "* Assist in creation of new structure definitions / virtual calls detection\n* Jump directly to virtual function or structure member definition\n* Gives list of structures with given size, with given offset\n* Finds structures with same \"shape\" as is used.\n* convert function to __usercall or __userpurge\n* and more...."},

{name: "HexRaysPyTools", 
 url: "https://github.com/igogo-x86/HexRaysPyTools",
 desc: "Plugin assists in creation classes/structures and detection virtual tables. Best to use with Class Informer plugin, because it helps to automatically get original classes names."},

{name: "HRDEV", 
 url: "https://github.com/ax330d/hrdev",
 desc: "This is an IDA Pro Python plugin to make Hex-Rays Decompiler output bit more attractive. HRDEV plugin retrieves standard decompiler output, parses it with Python Clang bindings, does some magic, and puts back."},

{name: "HrDevHelper", 
 url: "https://github.com/patois/HRDevHelper",
 desc: "HexRays decompiler plugin that visualizes the ctree of decompiled functions using IDA's graph engine."},

{name: "Hyara", 
 url: "https://www.hex-rays.com/contests/2018/index.shtml",
 desc: "A plugin to create pattern-matching rules. It helps creating rules for the YARA pattern-matching tool direcly in IDA. It includes a simple detection of relocatable bytes in x86 opcodes for improved matching. It also provides a checker feature for testing the rules on the loaded binary."},

{name: "ida-qscripts", 
 url: "https://github.com/0xeb/ida-qscripts",
 desc: "An IDA scripting productivity plugin. With this plugin, you will be able to easily write and test scripts using your favorite editor. `ida-qscripts` will automatically detect changes to your script or one of its dependencies and automatically reload them and re-execute your script."},

{name: "ida-cmake", 
 url: "https://github.com/0xeb/ida-cmake",
 desc: "This is not an IDA plugin but a CMake project generator for IDA plugins development."},

{name: "ida-climacros", 
 url: "https://github.com/0xeb/ida-climacros",
 desc: "`ida-climacros` is a productivity plugin that allows you to define macros that will be expanded when interfacing with IDA's command line interpreter (in the output window)."},

{name: "IDA2SQL", 
 url: "https://github.com/zynamics/ida2sql-plugin-ida",
 desc: "As the name implies this plugin can be used to export information from IDA databases to SQL databases. This allows for further analysis of the collected data: statstical analysis, building graphs, finding similarities between programs, etc."},

{name: "IDA ARM", 
 url: "https://github.com/gdelugre/ida-arm-system-highlight",
 desc: "This script will give you the list of ARM system instructions used in your IDA database. This is useful for locating specific low-level pieces of code (setting up the MMU, caches, fault handlers, etc.)."},

{name: "idawasm", 
 url: "https://github.com/fireeye/idawasm",
 desc: "These IDA Pro plugins add support for loading and disassembling WebAssembly modules.\n* control flow reconstruction and graph mode\n* code and data cross references\n* globals, function parameters, local variables, etc. can be renamed\n* auto-comment hint suport"},

{name: "idaxex", 
 url: "https://github.com/emoose/idaxex",
 desc: "Xbox360/Xenon loader plugin for IDA 7.2+, supporting most known Xbox360/Xenon .XEX executable file formats."},

{name: "IDA Batch Decompile", 
 url: "https://github.com/tintinweb/ida-batch_decompile",
 desc: "IDA Batch Decompile is a plugin for Hex-Ray's IDA Pro that adds the ability to batch decompile multiple files and their imports with additional annotations (xref, stack var size) to the pseudocode .c file"},

{name: "IDABuddy", 
 url: "https://github.com/tmr232/IDABuddy",
 desc: "IDABuddy is a reverse-engineer's best friend. Designed to be everything Clippy the Office Assistant was, and more!"},

{name: "IDA C#", 
 url: "https://github.com/Fabi/IDACSharp",
 desc: "Scripting IDA with C#"},

{name: "IDA Compare", 
 url: "https://github.com/dzzie/IDACompare",
 desc: "IDA disassembly level diffing tool, find patches and modifications between malware variants. See mydoom A/B sample database and video trainer for usage."},

{name: "IDACyber", 
 url: "https://github.com/patois/IDACyber",
 desc: "IDACyber is a plugin for the Interactive Disassembler that visualizes an IDA database's content."},

{name: "IDA EA", 
 url: "https://github.com/1111joe1111/ida_ea",
 desc: "Provides a context viewer,  instruction emulator, heap explorer, trace dumper, GDB integration, Styling"},

{name: "IDA Emu", 
 url: "https://github.com/36hours/idaemu",
 desc: "idaemu is an IDA Pro Plugin - use for emulating code in IDA Pro. it is base on unicorn-engine."},

{name: "IDA Eye", 
 url: "http://www.mfmokbel.com/Down/RCE/Documentation.html",
 desc: "Plugin that enables you to perform different operations at the mnemonic level, independent of any particular processor type. These operations are facilitated through a parameterized template, which include the capabilities to de/highlight instructions, gather statistical information about the frequency of each instruction, and search for sequences of mnemonics, among other features."},

{name: "IDA Extrapass", 
 url: "http://sourceforge.net/projects/idaextrapassplugin/",
 desc: "An IDA Pro Win32 target clean up plug-in by Sirmabus. It does essentially four cleaning/fixing steps: Convert stray code section values to \"unknown\", fix missing \"align\" blocks, fix missing code bytes, and locate and fix missing/undefined functions."},

{name: "IDAFuzzy", 
 url: "https://github.com/Ga-ryo/IDAFuzzy",
 desc: "IDAFuzzy is fuzzy searching tool for IDA Pro. This tool helps you to find command/function/struct and so on."},

{name: "ida-genesis", 
 url: "https://github.com/zznop/ida-genesis",
 desc: "Suite of IDA scripts for SEGA Genesis ROM hacking."},

{name: "idaidle", 
 url: "https://github.com/google/idaidle",
 desc: "idaidle is a plugin for the commercial IDA Pro disassembler that warns users if they leave their instance idling for too long. After a predetermined amount of idle time, the plugin first warns and later then saves the current disassemlby database and closes IDA."},

{name: "IDA Images", 
 url: "https://github.com/rr-/ida-images",
 desc: "Image preview plugin for IDA disassembler."},

{name: "IDA IPython", 
 url: "https://github.com/james91b/ida_ipython",
 desc: "This is a plugin to embed an IPython kernel in IDA Pro. The Python ecosystem has amazing libraries (and communities) for scientific computing. IPython itself is great for exploratory data analysis. Using tools such as the IPython notebook make it easy to share code and explanations with rich media. IPython makes using IDAPython and interacting with IDA programmatically really fun and easy."},

{name: "IDAngr", 
 url: "https://github.com/andreafioraldi/IDAngr",
 desc: "Use angr in the ida debugger generating a state from the current debug session "},

{name: "IDA BPF Processor", 
 url: "https://github.com/bnbdr/ida-bpf-processor",
 desc: "BPF Bytecode Processor for IDA (python). Supports the old BPF bytecode only (no eBPF)."},

{name: "IDA Migrator", 
 url: "https://github.com/giladreich/ida_migrator",
 desc: "IDA Migrator plugin makes the job of migrating symbols and type informations from one IDA database instance to another. It will help migrating function names, structures and enums. This comes in handy when:\n* Moving to a newer version of IDA that does better analysis and you don't want to change in the new instance type information or variable names of the decompiled functions.\n* The current idb instance fails to decompile a function or the decompilation looks wrong in comparison to another idb instance of the same binary.\n* Experimenting on another idb instance before making major changes on the current instance.\n* A lightweight easy way of creating small backups of the current work.\n* For w/e reason, the current idb instance you're working on gets corrupted."},

{name: "IDAMagicStrings", 
 url: "https://github.com/joxeankoret/idamagicstrings",
 desc: "An IDA Python plugin to extract information from string constants. The current version of the plugin is able to:\n* Display functions to source files relationships (in a tree and in a plain list, a chooser in IDA language).\n* Display guessed function names for functions.\n* Rename functions according to the source code file their belong + address (for example, memory_mgmt_0x401050).\n* Rename functions according to the guessed function name."},

{name: "idamagnum", 
 url: "https://github.com/lucasg/idamagnum",
 desc: "A plugin for integrating MagnumDB requests within IDA. MagNumDB is a database that contains about 380,000 items. These items are constants, names, values all extracted from more than 6,000 header files (.h, .hxx, .hpp, .idl, etc.) provided by standard Windows and Visual Studio SDKs and WDKs. "},

{name: "IDA-minsc", 
 url: "https://github.com/arizvisa/ida-minsc",
 desc: "A plugin that assists a user with scripting the IDAPython plugin that is bundled with the disassembler. This plugin groups the different aspects of the IDAPython API into a simpler format which allows a reverse engineer to script different aspects of their work with very little investment."},

{name: "IDA Patchwork", 
 url: "https://bitbucket.org/daniel_plohmann/idapatchwork",
 desc: "Stitching against malware families with IDA Pro (tool for the talk at Spring9, https://spring2014.gdata.de/spring2014/programm.html). In essence, I use a somewhat fixed / refurbished version of PyEmu along IDA to demonstrate deobfuscation of the different patterns found in the malware family Nymaim."},

{name: "IDA Python Embedded Toolkit", 
 url: "https://github.com/maddiestone/IDAPythonEmbeddedToolkit",
 desc: "IDAPython scripts for automating analysis of firmware of embedded devices."},

{name: "IDAPyHelper", 
 url: "https://github.com/patois/IDAPyHelper",
 desc: "IDAPyHelper is a script for the Interactive Disassembler that helps writing IDAPython scripts and plugins."},

{name: "IDARay", 
 url: "https://github.com/SouhailHammou/IDARay-Plugin",
 desc: "IDARay is an IDA Pro plugin that matches the database against multiple YARA files. Maybe your rules are scattered over multiple YARA files or you simply want to match against as much rules as possible, IDARay is here to help."},

{name: "IDA Ref", 
 url: "https://github.com/nologic/idaref",
 desc: "IDA Pro Full Instruction Reference Plugin - It's like auto-comments but useful."},

{name: "IDA Rest", 
 url: "https://github.com/dshikashio/idarest",
 desc: "A simple REST-like API for basic interoperability with IDA Pro."},

{name: "IDArling", 
 url: "https://github.com/IDArlingTeam/IDArling/",
 desc: "IDArling is a collaborative reverse engineering plugin for IDA Pro and Hex-Rays. It allows to synchronize in real-time the changes made to a database by multiple users, by connecting together different instances of IDA Pro."},

{name: "IDA Scope", 
 url: "https://github.com/danielplohmann/idascope",
 desc: "IDAscope is an IDA Pro extension with the goal to ease the task of (malware) reverse engineering with a current focus on x86 Windows. It consists of multiple tabs, containing functionality to achieve different goals such as fast identification of semantically interesting locations in the analysis target, seamless access to MSDN documentation of Windows API, and finding of potential crypto/compression algorithms."},

{name: "IDA Signature Matching Tool", 
 url: "http://sourceforge.net/projects/idasignsrch/",
 desc: "Tool for searching signatures inside files, extremely useful as help in reversing jobs like figuring or having an initial idea of what encryption/compression algorithm is used for a proprietary protocol or file. It can recognize tons of compression, multimedia and encryption algorithms and\nmany other things like known strings and anti-debugging code which can be also manually added since it's all based on a text signature file read at run-time and easy to modify."},

{name: "IDA Skins", 
 url: "https://github.com/zyantific/IDASkins",
 desc: "Plugin providing advanced skinning support for the Qt version of IDA Pro utilizing Qt stylesheets, similar to CSS."},

{name: "IDA Sploiter", 
 url: "https://github.com/iphelix/ida-sploiter",
 desc: "IDA Sploiter is a plugin for Hex-Ray's IDA Pro disassembler designed to enhance IDA's capabilities as an exploit development and vulnerability research tool. Some of the plugin's features include a powerful ROP gadgets search engine, semantic gadget analysis and filtering, interactive ROP chain builder, stack pivot analysis, writable function pointer search, cyclic memory pattern generation and offset analysis, detection of bad characters and memory holes, and many others."},

{name: "IDA Stealth", 
 url: "https://github.com/onethawt/idastealth",
 desc: "IDAStealth is a plugin which aims to hide the IDA debugger from most common anti-debugging techniques. The plugin is composed of two files, the plugin itself and a dll which is injected into the debuggee as soon as the debugger attaches to the process. The injected dll actually implements most of the stealth techniques either by hooking system calls or by patching some flags in the remote process."},

{name: "IDA StringCluster", 
 url: "https://github.com/Comsecuris/ida_strcluster",
 desc: "This plugin extends IDA Pro's capabilities to display strings within the binary by clustering found strings on a per-function basis."},

{name: "IDA Toolbag", 
 url: "https://github.com/aaronportnoy/toolbag",
 desc: "The IDA Toolbag plugin provides many handy features, such as:\n* A 'History' view, that displays functions in the disassembly that you have decided are important, and the relationships between them.\n* A code path-searching tool, that lets you find what functions (or blocks) are forming a path between two locations.\n* Manage and run your IDC/Python scripts\n* Something that's also of considerable importance is that the IDA Toolbag lets you collaborate with other IDA users: one can publish his 'History', or import another user's history & even merge them!\n* See the official documentation for an extensive feature list."},

{name: "IdaVSHelp", 
 url: "https://github.com/andreafioraldi/IdaVSHelp",
 desc: "IDAPython plugin to integrate Visual Studio Help Viewer in IDA Pro >= 6.8"},

{name: "IDAtropy", 
 url: "https://github.com/danigargu/IDAtropy",
 desc: "IDAtropy is a plugin for Hex-Ray's IDA Pro designed to generate charts of entropy and histograms using the power of idapython and matplotlib."},

{name: "IDA Xtensa", 
 url: "https://github.com/themadinventor/ida-xtensa",
 desc: "This is a processor plugin for IDA, to support the Xtensa core found in Espressif ESP8266. It does not support other configurations of the Xtensa architecture, but that is probably (hopefully) easy to implement."},

{name: "idb2pat", 
 url: "https://github.com/alexander-pick/idb2pat",
 desc: "IDB to Pat."},

{name: "IFL", 
 url: "https://github.com/hasherezade/ida_ifl",
 desc: "Interactive Functions List is an user-friendly way to navigate between functions and their references."},

{name: "ifred", 
 url: "https://github.com/Jinmo/ifred",
 desc: "IDA command palette & further"},

{name: "ioctl_plugin", 
 url: "https://github.com/sam-b/ioctl_plugin",
 desc: "A tool to help when dealing with IOCTL codes and Windows driver IOCTL dispatch functions."},

{name: "IPyIDA", 
 url: "https://github.com/eset/ipyida",
 desc: "PyIDA is a python-only solution to use a IPython console in the context of IDA Pro. It spawns an IPython kernel that you can connect to with `ipython console --existing` in your shell or by opening a *QT Console* window in IDA Pro with `<Shift-.>`"},

{name: "JNIDA", 
 url: "https://github.com/applicazza/JNIDA",
 desc: "Helps to rename JNI native methods and restore their C signatures"},

{name: "Kam1n0", 
 url: "https://github.com/McGill-DMaS/Kam1n0-Plugin-IDA-Pro",
 desc: "Kam1n0 is a scalable system that supports assembly code clone search. It allows a user to first index a (large) collection of binaries, and then search for the code clones of a given target function or binary file. Kam1n0 tries to solve the efficient subgraph search problem (i.e. graph isomorphism problem) for assembly functions."},

{name: "Karta", 
 url: "https://github.com/CheckPointSW/Karta",
 desc: "\"Karta\" (Russian for \"Map\") is a source code assisted fast binary matching plugin for IDA. Karta identifies and matches open-sourced libraries in a given binary using a unique technique that enables it to support huge binaries (> 200,000 functions) with almost no impact on the overall performance."},

{name: "Keypatch", 
 url: "http://keystone-engine.org/keypatch",
 desc: "A multi-architeture assembler for IDA. Keypatch allows you enter assembly instructions to directly patch the binary under analysis. Powered by [Keystone engine](http://keystone-engine.org)."},

{name: "Labeless", 
 url: "https://github.com/a1ext/labeless",
 desc: "Labeless is a plugin system for dynamic, seamless and realtime synchronization between IDA Database and Olly. Labels, function names and global variables synchronization is supported. \nLabeless provides easy to use dynamic dumping tool, which supports automatic on-the-fly imports fixing as well as convenient tool for IDA-Olly Python scripting synergy."},

{name: "LazyIDA", 
 url: "https://github.com/L4ys/LazyIDA",
 desc: "LazyIDA lets you perform many tasks simply and quickly (e.g., remove function return type in Hex-Rays, convert data into different formats, scan for format string vulnerabilities and a variety of shortcuts)"},

{name: "Lighthouse", 
 url: "https://github.com/gaasedelen/lighthouse",
 desc: "Lighthouse is a Code Coverage Plugin for IDA Pro. The plugin leverages IDA as a platform to map, explore, and visualize externally collected code coverage data when symbols or source may not be available for a given binary."},

{name: "LoadProcConfig", 
 url: "https://github.com/alexhude/LoadProcConfig",
 desc: "LoadProcConfig is an IDA plugin to load processor configuration files."},

{name: "Localxrefs", 
 url: "https://github.com/devttys0/ida/tree/master/plugins/localxrefs",
 desc: "Finds references to any selected text from within the current function."},

{name: "MadNES", 
 url: "https://github.com/patois/MadNES",
 desc: "This plugin exports IDA names to FCEUXD SP symbols."},

{name: "MazeWalker", 
 url: "https://github.com/0xPhoeniX/MazeWalker",
 desc: "Toolkit for enriching and speeding up static malware analysis. MazeWalker’s goal is to reduce malware analysis time by automating runtime data collection and better visualization eventually helping a researcher to concentrate on static analysis and less on its dynamic part."},

{name: "MC68K Processor Model Extension", 
 url: "https://github.com/LucienMP/idapro_m68k",
 desc: "This is a sample plugin for extending gdb support for step-over for the M68K, and to enable type information support so you can press \"y\" on functions and have the parameters propagate inside and back out of the function."},

{name: "mipslocalvars", 
 url: "https://github.com/devttys0/ida/tree/master/plugins/mipslocalvars",
 desc: "Names stack variables used by the compiler for storing registers on the stack, simplifying stack data analysis (MIPS only)"},

{name: "mipsrop", 
 url: "https://github.com/devttys0/ida/tree/master/plugins/mipsrop",
 desc: "* Allows you to search for suitable ROP gadgets in MIPS executable code\n* Built-in methods to search for common ROP gadgets"},

{name: "MrsPicky", 
 url: "https://github.com/patois/mrspicky",
 desc: "An IDAPython decompiler script that helps auditing calls to the memcpy() and memmove() functions."},

{name: "MSDN Helper", 
 url: "https://github.com/Z-Rantom/IMH",
 desc: "This tool will help you to get to Offline MSDN help while using IDA Pro."},

{name: "MyNav", 
 url: "https://code.google.com/p/mynav/",
 desc: "MyNav is a plugin for IDA Pro to help reverse engineers in the most typical task like discovering what functions are responsible of some specifical tasks, finding paths between \"interesting\" functions and data entry points."},

{name: "nao", 
 url: "https://github.com/tkmru/nao",
 desc: "nao(no-meaning assembly omiter) is dead code eliminator plugin for IDA pro"},

{name: "NDSLdr", 
 url: "https://github.com/patois/NDSLdr",
 desc: "Nintendo DS ROM loader module for IDA Pro."},

{name: "NECromancer", 
 url: "https://github.com/patois/NECromancer",
 desc: "IDA Pro V850 Processor Module Extension."},

{name: "NES Loader", 
 url: "https://github.com/patois/nesldr",
 desc: "Nintendo Entertainment System (NES) ROM loader module for IDA Pro."},

{name: "NIOS2", 
 url: "https://www.hex-rays.com/contests/2018/index.shtml",
 desc: "An IDA Pro processor module for Altera Nios II Classic/Gen2 microprocessor architecture."},

{name: "NSIS Reversing Suite", 
 url: "https://github.com/isra17/nrs/",
 desc: "NRS is a set of Python librairies used to unpack and analysis NSIS installer's data. It also feature an IDA plugin used to disassembly the NSIS Script of an installer."},

{name: "obfDetect", 
 url: "https://github.com/mcdulltii/obfDetect",
 desc: "A plugin to automatically detect obfuscated code and state machines in binaries."},

{name: "Optimice", 
 url: "https://code.google.com/p/optimice/",
 desc: "This plugin enables you to remove some common obfuscations and rewrite code to a new segment. Currently supported optimizations are: Dead code removal, JMP merging, JCC opaque predicate removal, Pattern based deobfuscations"},

{name: "Oregami", 
 url: "https://github.com/shemesh999/oregami",
 desc: "A plugin analyzing the current function to find the usage frame of registers. Oregami eases the work when tracking the use of a register within a function, by limiting the search to occurrences related to the one currently highlighted instead of the whole function. It also allows localized renaming of the registers, and batch type giving to multiple opcodes using the registers."},

{name: "Patcher", 
 url: "https://github.com/iphelix/ida-patcher",
 desc: "IDA Patcher is a plugin for Hex-Ray's IDA Pro disassembler designed to enhance IDA's ability to patch binary files and memory."},

{name: "Plus22", 
 url: "https://github.com/v0s/plus22",
 desc: "Plus22 transforms x86_64 executables to be processed with 32-bit version of Hex-Rays Decompiler."},

{name: "Plympton", 
 url: "https://github.com/rogwfu/plympton",
 desc: "A gem to read program disassembly from a YAML dump. The YAML dump is generated from an IDA Pro python script. This script is included along with this Gem (func.py)"},

{name: "Pomidor", 
 url: "https://github.com/iphelix/ida-pomidor",
 desc: "IDA Pomidor is a plugin for Hex-Ray's IDA Pro disassembler that will help you retain concentration and productivity during long reversing sessions."},

{name: "Ponce", 
 url: "https://github.com/illera88/Ponce",
 desc: "Taint analysis and symbolic execution over binaries in an easy and intuitive fashion."},

{name: "Prefix", 
 url: "https://github.com/gaasedelen/prefix",
 desc: "Prefix is a small function prefixing plugin for IDA Pro. The plugin augments IDA's function renaming capabilities by adding a handful of convenient prefixing actions to relevant right click menus."},

{name: "Processor changer", 
 url: "https://github.com/techbliss/Processor-Changer",
 desc: "Change processor without restarting IDA."},

{name: "Python Editor", 
 url: "https://github.com/techbliss/Python_editor",
 desc: "Python editor based IDA Pro. The plugin helps python devs with scripting and running python scripts, and creating them. IT have many functions, code recognition and more."},

{name: "python-idb", 
 url: "https://github.com/williballenthin/python-idb",
 desc: "not an IDA Pro plugin but allows to open IDA databases (`*.idb` and `*.i64`) and run a simple subset of IDAPython API on top of them, without the IDA Pro itself."},

{name: "qb-sync", 
 url: "https://github.com/quarkslab/qb-sync",
 desc: "qb-sync is an open source tool to add some helpful glue between IDA Pro and Windbg. Its core feature is to dynamically synchronize IDA's graph windows with Windbg's position."},

{name: "Qualcomm Loader", 
 url: "https://github.com/daxgr/qcom-mbn-ida-loader",
 desc: "IDA loader plugin for Qualcomm Bootloader Stages"},

{name: "Recompiler", 
 url: "https://github.com/bastkerg/Recomp",
 desc: "IDA recompiler"},

{name: "Reef", 
 url: "https://github.com/darx0r/Reef",
 desc: "IDAPython plugin for finding Xrefs from a function."},

{name: "REobjc", 
 url: "https://github.com/duo-labs/idapython",
 desc: "REobjc is an IDAPython module designed to make proper cross references between calling functions and called functions in Objective-C methods. The current form of the module supports X64, and will be updated to also support ARM in the future."},

{name: "REProgram", 
 url: "https://github.com/jkoppel/REProgram",
 desc: "A way of making almost-arbitrary changes to an executable when run under a debugger -- even changes that don't fit."},

{name: "retdec", 
 url: "https://retdec.com/idaplugin/",
 desc: "IDA plugin for retdec - a retargetable machine-code decompiler based on LLVM."},

{name: "ret-sync", 
 url: "https://github.com/bootleg/ret-sync",
 desc: "ret-sync stands for Reverse-Engineering Tools synchronization. It's a set of plugins that help to synchronize a debugging session (WinDbg/GDB/LLDB/OllyDbg2/x64dbg) with IDA disassembler. The underlying idea is simple: take the best from both worlds (static and dynamic analysis)."},

{name: "REtypedef", 
 url: "https://github.com/zyantific/REtypedef",
 desc: "REtypedef is an IDA PRO plugin that allows defining custom substitutions for function names. It comes with a default ruleset providing substitutions for many common STL types."},

{name: "rizzo", 
 url: "https://github.com/devttys0/ida/tree/master/plugins/rizzo",
 desc: "Identifies and re-names functions between two or more IDBs based on:\n* Formal signatures (i.e., exact function signatures)\n* References to unique string\n* References to unique constants\n* Fuzzy signatures (i.e., similar function signatures)\n* Call graphs (e.g., identification by association)"},

{name: "Samsung S4 Rom Loader", 
 url: "https://github.com/cycad/mbn_loader",
 desc: "IDA Pro Loader Plugin for Samsung Galaxy S4 ROMs"},

{name: "Sark", 
 url: "https://github.com/tmr232/Sark/",
 desc: "Sark, (named after the notorious Tron villain,) is an object-oriented scripting layer written on top of IDAPython. Sark is easy to use and provides tools for writing advanced scripts and plugins."},

{name: "ScratchABit", 
 url: "https://github.com/pfalcon/ScratchABit",
 desc: "ScratchABit is an interactive incremental disassembler with data/control flow analysis capabilities. ScratchABit is dedicated to the efforts of the OpenSource reverse engineering community (reverse engineering to produce OpenSource drivers/firmware for hardware not properly supported by vendors)."},

{name: "Screen recorder", 
 url: "https://github.com/techbliss/Ida_Pro_Screen_Recorder",
 desc: "IDA Pro Qt Plugin for recording reversing sessions."},

{name: "Sega Genesis/Megadrive Tools", 
 url: "https://github.com/DrMefistO/smd_ida_tools",
 desc: "Special IDA Pro tools for the Sega Genesis/Megadrive romhackers. Tested work on v5.2, v6.6. Should work on other versions."},

{name: "Sig Maker", 
 url: "https://tuts4you.com/download.php?view.3263",
 desc: "Can create sigs automatically and has a wide variety of functions (might be unstable on IDA 6.2)."},

{name: "SimplifyGraph", 
 url: "https://github.com/fireeye/SimplifyGraph",
 desc: "An IDA Pro plugin to assist with complex graphs."},

{name: "Simulator", 
 url: "https://github.com/nihilus/IDASimulator",
 desc: "IDASimulator is a plugin that extends IDA's conditional breakpoint support, making it easy to augment / replace complex executable code inside a debugged process with Python code."},

{name: "Snippt Detector", 
 url: "https://github.com/zaironne/SnippetDetector",
 desc: "Snippet Detector is an IDA Python scripts project used to detect snippets from 32bit disassembled files. snippet is the word used to identify a generic sequence of instructions (at the moment a snippet is indeed a defined function). The aim of the tool is to collect many disassembled snippets inside a database for the detection process."},

{name: "Snowman Decompiler", 
 url: "http://derevenets.com/",
 desc: "Snowman is a native code to C/C++ decompiler. Standalone and IDA Plugin. [Source Code](https://github.com/yegord/snowman)"},

{name: "Splode", 
 url: "https://github.com/zachriggle/ida-splode",
 desc: "Augmenting Static Reverse Engineering with Dynamic Analysis and Instrumentation"},

{name: "spu3dbg", 
 url: "https://github.com/revel8n/spu3dbg",
 desc: "Ida Pro debugger module for the anergistic SPU emulator."},

{name: "Stingray", 
 url: "https://github.com/darx0r/Stingray",
 desc: "Stingray is an IDAPython plugin for finding function strings. The search is from the current position onwards in the current function. It can do it recursively also with configurable search depth. The results order is the natural order of strings in the BFS search graph."},

{name: "Structure Dump", 
 url: "http://www.openrce.org/downloads/details/227/Structure_Dump",
 desc: "StructDump is an IDA plugin, allowing you to export IDA types into high-level language definitions. Currently, C++ is supported."},

{name: "Styler", 
 url: "https://github.com/techbliss/IDA-Styler",
 desc: "Small Plugin to change the style off Ida Pro"},

{name: "Synergy", 
 url: "https://github.com/CubicaLabs/IDASynergy",
 desc: "A combination of an IDAPython Plugin and a control version system that result in a new reverse engineering collaborative addon for IDA Pro. By http://cubicalabs.com/"},

{name: "sysm2elf", 
 url: "https://github.com/danigargu/syms2elf",
 desc: "A plugin for IDA Pro and radare2 to export the symbols recognized to the ELF symbol table."},

{name: "Tarkus", 
 url: "https://github.com/tmr232/Tarkus",
 desc: "Tarkus is a plugin manager for IDA Pro, modelled after Python's pip."},

{name: "TurboDiff", 
 url: "http://www.coresecurity.com/corelabs-research/open-source-tools/turbodiff",
 desc: "Turbodiff is a binary diffing tool developed as an IDA plugin. It discovers and analyzes differences between the functions of two binaries."},

{name: "uEmu", 
 url: "https://github.com/alexhude/uEmu",
 desc: "uEmu is a tiny cute emulator plugin for IDA based on unicorn engine. Supports following architectures out of the box: x86, x64, ARM, ARM64, MIPS, MIPS64"},

{name: "UEFI_RETool", 
 url: "https://github.com/yeggor/UEFI_RETool/tree/master/ida_plugin",
 desc: "IDA Plugin for UEFI firmware executable images analysing"},

{name: "Virtuailor", 
 url: "https://github.com/0xgalz/Virtuailor",
 desc: "Virtuailor is an IDAPython tool that reconstructs vtables for C++ code written for intel architechture and both 32bit and 64bit code."},

{name: "VirusBattle", 
 url: "https://github.com/axmat/virusbattle-ida-plugin",
 desc: "The plugin is an integration of Virus Battle API to the well known IDA Disassembler. Virusbattle is a web service that analyses malware and other binaries with a variety of advanced static and dynamic analyses."},

{name: "VMAttack", 
 url: "https://github.com/anatolikalysch/VMAttack",
 desc: "Static and dynamic virtualization-based packed analysis and deobfuscation."},

{name: "Win32 LST to Inline Assembly", 
 url: "https://github.com/binrapt/ida",
 desc: "Python script which extracts procedures from IDA Win32 LST files and converts them to correctly dynamically linked compilable Visual C++ inline assembly."},

{name: "WinIOCtlDecoder", 
 url: "https://github.com/tandasat/WinIoCtlDecoder",
 desc: "An IDA Pro plugin which decodes a Windows Device I/O control code into DeviceType, FunctionCode, AccessType and MethodType."},

{name: "Xex Loader for IDA 6.6", 
 url: "http://xorloser.com/blog/?p=395",
 desc: "This adds the ability to load xex files into IDA directly without having to first process them in any way. It processes the xex file as much as possible while loading to minimise the work required by the user to get it to a state fit for reversing."},

{name: "xray", 
 url: "https://github.com/patois/xray",
 desc: "Hexrays decompiler plugin that colorizes and filters the decompiler's output based on regular expressions"},

{name: "X86Emu", 
 url: "http://www.idabook.com/ida-x86emu/",
 desc: " Its purpose is to allow a reverse engineer the chance to step through x86 code while reverse engineering a binary.  The plugin can help you step through any x86 binary from any platform. For Windows binaries, many common library calls are trapped and emulated by the emulator, allowing for a higher fidelity emulation. I find it particularly useful for stepping through obfuscated code as it automatically reorganizes an IDA disassembly based on actual code paths."},

{name: "YaCo", 
 url: "https://github.com/DGA-MI-SSI/YaCo",
 desc: ": Collaboration Plugin : when enabled, an unlimited number of users can work simultaneously on the same binary. Any modification done by any user is synchronized through git version control. It has been initially released at [SSTIC 2017](https://www.sstic.org/2017/presentation/YaCo/)"},

{name: "Zynamics BinDiff", 
 url: "http://www.zynamics.com/bindiff.html",
 desc: "BinDiff is a comparison tool for binary files, that assists vulnerability researchers and engineers to quickly find differences and similarities in disassembled code."},

];
