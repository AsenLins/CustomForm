/**
 * 模板工厂
 */
import { OverTimeForm } from './overTimeForm'
import { VacationForm } from './vacationForm'
import { TravelExpensesForm } from './travelExpensesForm'

const templateFactory = {
    overTimeForm: function(option) {
        return new OverTimeForm(option);
    },
    vacationForm: function(option) {
        return new VacationForm(option);
    },
    travelExpensesForm: function(option) {
        return new TravelExpensesForm(option);
    }
}

export { templateFactory }