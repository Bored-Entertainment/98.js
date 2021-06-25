function initialise() {
    window.setPrimaryDisplay = function setPrimaryDisplayToBeCalledFromEngineWithDisplayString(displayStr) {
        //fix for Ove<br>flow
        // if (!displayStr === 'Overflow') /*TODO add some other cases*/ {
        //     displayStr = displayStr.replace("e", "e<br>");
        // }
        // document.querySelector('#display > #primary').innerHTML = displayStr;

        document.querySelector('#display > #primary').value = displayStr;
    }
    window.setExpressionDisplay = function setExpressionDisplayOverThePrimaryOne(displayStr) {
        this.document.querySelector('#display > #expression').textContent = displayStr;
    }
    window.Module._load(); //TODO try to asyncify it
    revealCalc();

    // Defined in Command.h
    var commandIDs = {
        // Commands for programmer calculators are omitted.
        CommandDEG: 321,
        CommandRAD: 322,
        CommandGRAD: 323,
        CommandDegrees: 324,
        CommandHYP: 325,

        CommandNULL: 0,

        // No new command should not be added before CommandSign, 80
        // If it is needed, the following two functions need to be revised too.
        // CalculatorManager::MapCommandForSerialize(Command command);
        // CalculatorManager::MapCommandForDeSerialize(unsigned char command);
        CommandSIGN: 80,
        CommandCLEAR: 81,
        CommandCENTR: 82,
        CommandBACK: 83,

        CommandPNT: 84,

        // Hole  85
        // Unused commands defined in Command.h is omitted.
        CommandXor: 88,
        CommandLSHF: 89,
        CommandRSHF: 90,
        CommandDIV: 91,
        CommandMUL: 92,
        CommandADD: 93,
        CommandSUB: 94,
        CommandMOD: 95,
        CommandROOT: 96,
        CommandPWR: 97,

        CommandCHOP: 98, // Unary operators must be between CommandCHOP and CommandEQU
        CommandROL: 99,
        CommandROR: 100,
        CommandCOM: 101,

        CommandSIN: 102,
        CommandCOS: 103,
        CommandTAN: 104,

        CommandSINH: 105,
        CommandCOSH: 106,
        CommandTANH: 107,

        CommandLN: 108,
        CommandLOG: 109,
        CommandSQRT: 110,
        CommandSQR: 111,
        CommandCUB: 112,
        CommandFAC: 113,
        CommandREC: 114,
        CommandDMS: 115,
        CommandCUBEROOT: 116, // x ^ 1/3
        CommandPOW10: 117,    // 10 ^ x
        CommandPERCENT: 118,

        CommandFE: 119,
        CommandPI: 120,
        CommandEQU: 121,

        CommandMCLEAR: 122,
        CommandRECALL: 123,
        CommandSTORE: 124,
        CommandMPLUS: 125,
        CommandMMINUS: 126,

        CommandEXP: 127,

        CommandOPENP: 128,
        CommandCLOSEP: 129,

        Command0: 130, // The controls for 0 through F must be consecutive and in order
        Command1: 131,
        Command2: 132,
        Command3: 133,
        Command4: 134,
        Command5: 135,
        Command6: 136,
        Command7: 137,
        Command8: 138,
        Command9: 139,
        CommandA: 140,
        CommandB: 141,
        CommandC: 142,
        CommandD: 143,
        CommandE: 144,
        CommandF: 145, // this is last control ID which must match the string table
        CommandINV: 146,
        CommandSET_RESULT: 147,

        CommandSEC: 400,
        CommandASEC: 401,
        CommandCSC: 402,
        CommandACSC: 403,
        CommandCOT: 404,
        CommandACOT: 405,

        CommandSECH: 406,
        CommandASECH: 407,
        CommandCSCH: 408,
        CommandACSCH: 409,
        CommandCOTH: 410,
        CommandACOTH: 411,

        CommandPOW2: 412,  // 2 ^ x
        CommandAbs: 413,
        CommandFloor: 414,
        CommandCeil: 415,
        CommandROLC: 416,
        CommandRORC: 417,
        CommandLogBaseX: 500,
        CommandNand: 501,
        CommandNor: 502,

        CommandRSHFL: 505,
        CommandRand: 600,
        CommandEuler: 601,

        CommandAnd: 86,
        CommandOR: 87,
        CommandNot: 101,

        ModeBasic: 200,
        ModeScientific: 201,

        CommandASIN: 202,
        CommandACOS: 203,
        CommandATAN: 204,
        CommandPOWE: 205,
        CommandASINH: 206,
        CommandACOSH: 207,
        CommandATANH: 208,

        ModeProgrammer: 209,
        CommandHex: 313,
        CommandDec: 314,
        CommandOct: 315,
        CommandBin: 316,
        CommandQword: 317,
        CommandDword: 318,
        CommandWord: 319,
        CommandByte: 320,

        CommandBINEDITSTART: 700,
        CommandBINPOS0: 700,
        CommandBINPOS1: 701,
        CommandBINPOS2: 702,
        CommandBINPOS3: 703,
        CommandBINPOS4: 704,
        CommandBINPOS5: 705,
        CommandBINPOS6: 706,
        CommandBINPOS7: 707,
        CommandBINPOS8: 708,
        CommandBINPOS9: 709,
        CommandBINPOS10: 710,
        CommandBINPOS11: 711,
        CommandBINPOS12: 712,
        CommandBINPOS13: 713,
        CommandBINPOS14: 714,
        CommandBINPOS15: 715,
        CommandBINPOS16: 716,
        CommandBINPOS17: 717,
        CommandBINPOS18: 718,
        CommandBINPOS19: 719,
        CommandBINPOS20: 720,
        CommandBINPOS21: 721,
        CommandBINPOS22: 722,
        CommandBINPOS23: 723,
        CommandBINPOS24: 724,
        CommandBINPOS25: 725,
        CommandBINPOS26: 726,
        CommandBINPOS27: 727,
        CommandBINPOS28: 728,
        CommandBINPOS29: 729,
        CommandBINPOS30: 730,
        CommandBINPOS31: 731,
        CommandBINPOS32: 732,
        CommandBINPOS33: 733,
        CommandBINPOS34: 734,
        CommandBINPOS35: 735,
        CommandBINPOS36: 736,
        CommandBINPOS37: 737,
        CommandBINPOS38: 738,
        CommandBINPOS39: 739,
        CommandBINPOS40: 740,
        CommandBINPOS41: 741,
        CommandBINPOS42: 742,
        CommandBINPOS43: 743,
        CommandBINPOS44: 744,
        CommandBINPOS45: 745,
        CommandBINPOS46: 746,
        CommandBINPOS47: 747,
        CommandBINPOS48: 748,
        CommandBINPOS49: 749,
        CommandBINPOS50: 750,
        CommandBINPOS51: 751,
        CommandBINPOS52: 752,
        CommandBINPOS53: 753,
        CommandBINPOS54: 754,
        CommandBINPOS55: 755,
        CommandBINPOS56: 756,
        CommandBINPOS57: 757,
        CommandBINPOS58: 758,
        CommandBINPOS59: 759,
        CommandBINPOS60: 760,
        CommandBINPOS61: 761,
        CommandBINPOS62: 762,
        CommandBINPOS63: 763,
        CommandBINEDITEND: 763
    };
    // Handled in StandardModel::MemoryCommand
    const memoryCommandIDs = {
        'mp': 1,
        'mm': 2,
        'mc': 3,
    };

    var standardKeyboardMap = {
        'Escape': 'CommandCLEAR', 'Esc': 'CommandCLEAR',
        'Delete': 'CommandCENTR', 'Del': 'CommandCENTR',
        'Backspace': 'CommandBACK',
        '.': 'CommandPNT', 'Decimal': 'CommandPNT',
        '/': 'CommandDIV', 'Divide': 'CommandDIV',
        '*': 'CommandMUL', 'Multiply': 'CommandMUL',
        '+': 'CommandADD', 'Add': 'CommandADD',
        '-': 'CommandSUB', 'Subtract': 'CommandSUB',
        '%': 'CommandPERCENT',
        '=': 'CommandEQU', 'Enter': 'CommandEQU',
        '0': 'Command0',
        '1': 'Command1',
        '2': 'Command2',
        '3': 'Command3',
        '4': 'Command4',
        '5': 'Command5',
        '6': 'Command6',
        '7': 'Command7',
        '8': 'Command8',
        '9': 'Command9',
        'r': 'CommandREC', 'R': 'CommandREC',
    }
    function sendCommand(commandID) {
        window.Module._send(commandID);
    }
    function sendMemoryCommand(commandID, itm) {
        let items = document.querySelectorAll('#panel > .mempanel > .memory-item:not(#skel)');//Hope that returns in order
        let idx = Array.from(items).indexOf(itm);
        window._memComm(commandID, idx);
        if (commandID == memoryCommandIDs.mc) {
            let panel = document.querySelector('#panel > .mempanel');
            panel.removeChild(itm);
        }
    }
    /**
    * send button clicks as commands
    */
    document.querySelectorAll('button').forEach((button) => {
        button = filterOut(button);
        if (button) {
            button.addEventListener('click', (ev) => {
                let commandID = commandIDs[ev.target.id];
                //TODO do some more checks on commands
                sendCommand(commandID);
            })
        }

    })

    /**
     * History and Memory unveiling in compact mode
     */

    let sidebarUp = 0; //maybe stays in closure or something
    window.sidebarDown = function lowersTheSidebarToInitialState() {
        let sidebar = this.document.querySelector('#sidebar');
        sidebar.style.transform = 'translateY(0)';
        sidebarUp = 0;
        sidebar.style.height = '100%';
        sidebar.querySelectorAll('.del').forEach(d => {
            d.style.display = 'none';
        });
    }
    sidebarDown();
    function toggleSidebar() {
        let sidebar = this.document.querySelector('#sidebar');
        if (!sidebarUp) {
            sidebar.style.transform = 'translateY(-100%)';
            sidebar.style.height = '70%';
            sidebarUp = 1;
            sidebar.querySelectorAll('.del').forEach(d => {
                d.style.display = 'block';
            })
        }
        else {
            sidebarDown();
        }
    }

    window.onresize = function () {
        if (sidebarUp) {
            this.sidebarDown();
            sidebarUp = 0;
        }
    }
    window.toggleHistory = function togglesHistoryPanelUpDown() {
        toggleSidebar();
        let historyMenu = this.document.querySelector('#sidebar > #nav > #hspanel');
        makeActive(historyMenu);
    }
    window.toggleMemory = function togglesMemoryPanel() {
        toggleSidebar();
        let memoryMenu = this.document.querySelector('#sidebar > #nav > #mempanel');
        makeActive(memoryMenu);
    }


    /**
    * listens to keyboard clicks and map them to COMMAND
    */
    document.addEventListener('keydown', (ev) => {
        if (ev.defaultPrevented)
            return;
        //just standard for now
        let commandStr = standardKeyboardMap[ev.key];
        if (commandStr != undefined) {
            let btn = document.getElementById(commandStr);

            /* for that flicking effect */
            btn.classList.add('active');
            setTimeout(() => {
                btn.classList.remove('active');
            }, 100);

            btn.click();
        }
    })
    /**
    * Sidebar navigation // please rewrite this shitty code better
    */
    function makeActive(menuItem) {
        document.querySelectorAll('#sidebar > #nav > .nav-item').forEach(it => {
            it.classList.remove('active');
        });
        document.querySelectorAll('#panel > *').forEach(it => {
            it.style.display = 'none';
        });
        menuItem.classList.add('active');
        let id = menuItem.id;
        document.querySelector('#panel > .' + id).style.display = 'block';
    }

    document.querySelectorAll('#sidebar > #nav > .nav-item').forEach((item) => {
        item.addEventListener('click', (ev) => {
            makeActive(ev.target);
        });
    });

    /**
     * removeFrom function
     */
    window.removeFrom = function removeNodeItemsMatchingQuery(node, query) {
        node.querySelectorAll(query).forEach((elem) => {
            elem.remove();
        });
    }

    /**
    * History related funcs
    */
    window.setHistoryItem = function setHistoryItemAddingOneMoreItemToList(hEx, hRes) {
        let hItem = this.document.createElement('button');
        hItem.className = 'history-item';
        let hItemEx = this.document.createElement('div');
        hItemEx.className = 'expression';
        hItem.appendChild(hItemEx);
        let hItemRes = this.document.createElement('div');
        hItemRes.className = 'result';
        hItem.appendChild(hItemRes);
        //created an empty dom node 
        hItemEx.textContent = hEx;
        hItemRes.textContent = hRes;

        let panel = this.document.querySelector('#panel > .hspanel');
        //if placeholder
        let placeholder = this.document.querySelector('#panel > .hspanel > p');
        let delButton = this.document.querySelector('#panel > .hspanel > button.del');

        placeholder.style.display = 'none'; //maybe check first
        delButton.style.display = 'block';
        panel.prepend(hItem);

    }
    window.clearHistory = function clearHistoryOfEngineAndClearPanel() {
        this.window.Module._clearHs();
        let panel = this.document.querySelector('#panel .hspanel');
        removeFrom(panel, "button.history-item");
        panel.querySelector('p').style.display = 'block';
        panel.querySelector('button.del').style.display = 'none';
    }

    /**
     * Memory related funcs
    */
    window.setMemoryItem = function appendToListOfMemoryItem(memStr) {
        let itemSkel = this.document.querySelector('#panel > .mempanel > button.memory-item#skel');
        let itemBox = itemSkel.cloneNode(true);
        itemBox.style.display = 'block';
        itemBox.id = '';
        itemBox.querySelector('.value').textContent = memStr;

        let panel = this.document.querySelector('#panel > .mempanel');
        let placeholder = panel.querySelector('p');
        let delButton = panel.querySelector('button.del');

        placeholder.style.display = 'none';
        delButton.style.display = 'block';
        panel.prepend(itemBox);

        itemBox.querySelectorAll('.btns > *').forEach(btn => {
            btn.addEventListener('click', ev => {
                let commandID = memoryCommandIDs[ev.target.className];
                sendMemoryCommand(commandID, itemBox);
            });
        });
        this.document.querySelectorAll('button.onmem').forEach((btn) => {
            btn.classList.remove('disabled');
            btn.addEventListener('click', ev => {
                let commandStr = ev.target.id;
                if (commandStr == 'CommandMCLEAR') {
                    clearAllMemory();
                }
                sendCommand(commandStr);
            })
        });
    }
    window.updateMemoryItem = function updatesTheMemoryItemInListAtDesiredIndex(mStr, mIdx) {
        let panel = this.document.querySelector('#panel > .mempanel');
        item = panel.querySelectorAll('button.memory-item:not(#skel)')[mIdx];
        item.querySelector('.value').textContent = mStr;
    }
    window.clearAllMemory = function clearAllItemsInMemoryList() {
        this._clearMem();
        let panel = this.document.querySelector('#panel > .mempanel');
        removeFrom(panel, 'button.memory-item:not(#skel)');
        panel.querySelector('p').style.display = 'block';
        panel.querySelector('button.del').style.display = 'none';
        this.document.querySelectorAll('button.onmem').forEach((btn) => {
            btn.classList.add('disabled');
            btn.addEventListener('click', ev => ev);//do nothing on click
        });
    }

    function filterOut(button) {
        /**
        * TODO room for more tests
        */
        //filter out disabled, menu or similar numbers
        if (button.classList.contains('disabled') || !commandIDs[button.id])
            return null;
        //return the ones which pass above tests
        return button;
    }

};