// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Stmt_after_return

// The JavaScript warning "unreachable code after return statement" occurs when using an expression after a return statement, or when using a semicolon-less return statement but including an expression directly after. 

// Description:
// Unreachable code after a return statement might occur in these situations:
// 1. When using an expression after a return statement;
// 2. when using a semicolon-less return statement but including an expression directly after. 

// Important:
// Warnings will not be shown for semicolon-less returns if these statements follow it:
// • throw
// • break
// • var
// • function
