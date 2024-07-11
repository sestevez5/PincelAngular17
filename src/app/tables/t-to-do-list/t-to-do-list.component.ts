import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-t-to-do-list',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatPaginatorModule, MatTableModule, NgIf, MatCheckboxModule],
    templateUrl: './t-to-do-list.component.html',
    styleUrl: './t-to-do-list.component.scss'
})
export class TToDoListComponent {

    displayedColumns: string[] = ['taskName', 'status', 'assignedTo', 'deadline', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    // Search Filter
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}

export interface PeriodicElement {
    taskName: string;
    assignedTo: string;
    deadline: string;
    status: any;
    action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        taskName: 'Create A Project Plan',
        assignedTo: 'Alexander White',
        deadline: 'Due in 3 days',
        status: {
            active: 'Active',
            // onHand : 'On Hand'
            // urgent : 'Urgent'
        },
        action: {
            edit: 'ri-edit-line',
            delete : 'ri-delete-bin-line'
        }
    },
    {
        taskName: 'User Stories & Use Cases',
        assignedTo: 'Emma Anderson',
        deadline: 'Due in 4 days',
        status: {
            // active: 'Active',
            onHand : 'On Hand'
            // urgent : 'Urgent'
        },
        action: {
            edit: 'ri-edit-line',
            delete : 'ri-delete-bin-line'
        }
    },
    {
        taskName: 'Create Wireframes',
        assignedTo: 'Noah Taylor',
        deadline: 'Due in 1 day',
        status: {
            // active: 'Active',
            // onHand : 'On Hand'
            urgent : 'Urgent'
        },
        action: {
            edit: 'ri-edit-line',
            delete : 'ri-delete-bin-line'
        }
    },
    {
        taskName: 'Perform Unit Testing',
        assignedTo: 'Sophia Williams',
        deadline: 'Due in 3 days',
        status: {
            active: 'Active',
            // onHand : 'On Hand'
            // urgent : 'Urgent'
        },
        action: {
            edit: 'ri-edit-line',
            delete : 'ri-delete-bin-line'
        }
    },
    {
        taskName: 'Perform Unit Testing',
        assignedTo: 'Sophia Williams',
        deadline: 'Due in 3 days',
        status: {
            active: 'Active',
            // onHand : 'On Hand'
            // urgent : 'Urgent'
        },
        action: {
            edit: 'ri-edit-line',
            delete : 'ri-delete-bin-line'
        }
    },
    {
        taskName: 'Create Wireframes',
        assignedTo: 'Noah Taylor',
        deadline: 'Due in 1 day',
        status: {
            // active: 'Active',
            // onHand : 'On Hand'
            urgent : 'Urgent'
        },
        action: {
            edit: 'ri-edit-line',
            delete : 'ri-delete-bin-line'
        }
    },
    {
        taskName: 'User Stories & Use Cases',
        assignedTo: 'Emma Anderson',
        deadline: 'Due in 4 days',
        status: {
            // active: 'Active',
            onHand : 'On Hand'
            // urgent : 'Urgent'
        },
        action: {
            edit: 'ri-edit-line',
            delete : 'ri-delete-bin-line'
        }
    },
    {
        taskName: 'Create A Project Plan',
        assignedTo: 'Alexander White',
        deadline: 'Due in 3 days',
        status: {
            active: 'Active',
            // onHand : 'On Hand'
            // urgent : 'Urgent'
        },
        action: {
            edit: 'ri-edit-line',
            delete : 'ri-delete-bin-line'
        }
    }
];