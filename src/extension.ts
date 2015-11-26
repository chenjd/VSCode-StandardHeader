// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'; 
import {window, commands, Disposable, ExtensionContext, TextDocument} from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "standard-header" is now active!'); 

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let headerGen = new HeaderGenerator();
	var disposable = vscode.commands.registerCommand('extension.insertHeader', () => {
		// The code you place here will be executed every time your command is executed
		headerGen.insertHeader();
	});
	
	context.subscriptions.push(disposable);
}

class HeaderGenerator {

    public insertHeader() {

        // Get the current text editor 
        let editor = window.activeTextEditor; 
        if (!editor) { 
            return; 
        } 
        var doc : string = "/*\rThe MIT License (MIT)\ncopyright © 2015 <copyright holders>\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated \ndocumentation files (the “Software”), to deal in the Software without restriction, including without \nlimitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of \nthe Software, and to permit persons to whom the Software is furnished to do so, subject to the following\nconditions:\rThe above copyright notice and this permission notice shall be included in all copies or substantial portions \nof the Software.\nTHE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED \nTO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT \nSHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN \nACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE \nOR OTHER DEALINGS IN THE SOFTWARE.\n*/\n";
        editor.edit((eb) => {
            eb.insert(editor.document.positionAt(0), doc);
        });
    } 
}