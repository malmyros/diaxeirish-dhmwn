import React from 'react';
import PropTypes from 'prop-types';

const FinancialDataTable = (props) => {
    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Ονομασία</th>
                <th scope="col">Προϋπολογισθέντα</th>
                <th scope="col">Βεβαιωθέντα</th>
                <th scope="col">Εισπραχθέντα</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Τέλη και δικαιώματα από εμποροπανηγύρεις, παζάρια και λαικές αγορές (άρθρο 19 ΒΔ 24/9-20/10/1958)</td>
                <td>&euro;25,000</td>
                <td>&euro;17,488</td>
                <td>&euro;17,488</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Λοιπά έσοδα από ακίνητα</td>
                <td>&euro;85,000</td>
                <td>&euro;9,968</td>
                <td>&euro;3,544</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Τόκοι χρηματικών καταθέσεων σε τράπεζες</td>
                <td>&euro;10,0000</td>
                <td>&euro;14,5459.72</td>
                <td>&euro;14,5459.72</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Τέλος καθαριότητας και φωτισμού (άρθρο 25 Ν 1828/89)</td>
                <td>&euro;403,0451.12</td>
                <td>&euro;3,006,790.77</td>
                <td>&euro;3,006,543.02</td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>Δικαιώματα σύνδεσης και επανασύνδεσης με το δίκτυο</td>
                <td>&euro;50,000</td>
                <td>&euro;24,716</td>
                <td>&euro;23,155.21</td>
            </tr>
            <tr>
                <th scope="row">6</th>
                <td>Τέλος ύδρευσης</td>
                <td>&euro;5,0000</td>
                <td>&euro;1,603.02</td>
                <td>&euro;225.52</td>
            </tr>
            </tbody>
        </table>
    )
};

FinancialDataTable.propTypes = {
    financialData: PropTypes.array
};

FinancialDataTable.defaultProps = {
    financialData: []
};

export default FinancialDataTable;