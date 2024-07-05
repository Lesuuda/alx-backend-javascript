import {RowId, RowElement} from './interface';

declare function insertRow(row: RowElement): number;
declare function updateRow(id: RowId, row: RowElement): number;
declare function deleteRow(id: RowId): void;