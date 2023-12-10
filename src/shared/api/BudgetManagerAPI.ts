import {General} from './General'
import {Auth} from './Auth/Auth'
import {Currency} from './Currency/Currency'
import {Expense} from './Expense/Expense'
import {ExpenseCategory} from './ExpenseCategory/ExpenseCategory'
import {Income} from './Income/Income'
import {IncomeCategory} from './IncomeCategory/IncomeCategory'
import {MainExpense} from './MainExpense/MainExpense'
import {MainIncome} from './MainIncome/MainIncome'
import {Project} from './Project/Project'
import {Report} from './Report/Report'
import {User} from './User/User'

export class BudgetManagerAPI {

    static get auth() {
        return Auth.getMethods(General.getBackendUrl())
    }

    static get currency() {
        return Currency.getMethods(General.getBackendUrl())
    }

    static get expense() {
        return Expense.getMethods(General.getBackendUrl())
    }

    static get expenseCategory() {
        return ExpenseCategory.getMethods(General.getBackendUrl())
    }

    static get income() {
        return Income.getMethods(General.getBackendUrl())
    }

    static get incomeCategory() {
        return IncomeCategory.getMethods(General.getBackendUrl())
    }

    static get mainExpense() {
        return MainExpense.getMethods(General.getBackendUrl())
    }

    static get mainIncome() {
        return MainIncome.getMethods(General.getBackendUrl())
    }

    static get project() {
        return Project.getMethods(General.getBackendUrl())
    }

    static get report() {
        return Report.getMethods(General.getBackendUrl())
    }

    static get user() {
        return User.getMethods(General.getBackendUrl())
    }
}
